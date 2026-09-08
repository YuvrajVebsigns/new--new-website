'use client';

import Image from 'next/image';
import { ArrowUpRight, RefreshCw, ShieldCheck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { submitWebsiteContact } from '@/services/contacts.service';

const SERVICE_OPTIONS = [
  'Cooperative & Financial Societies Registration',
  'NBFC & Corporate Setup',
  'Agricultural Support & FPO Formation',
  'Compliance & Regulatory Advisory',
  'Funding & Growth Strategy',
];

// const OFFICE_LOCATIONS = [
//   { name: 'Delhi', className: 'contact-location-delhi' },
//   { name: 'Ahilyanagar', className: 'contact-location-ahilyanagar' },
//   { name: 'Pune', className: 'contact-location-pune' },
//   { name: 'Mumbai', className: 'contact-location-mumbai' },
// ];

const TURNSTILE_SCRIPT_SRC =
  'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string;
          theme?: 'light' | 'dark' | 'auto';
          size?: 'normal' | 'compact' | 'flexible' | 'invisible';
          execution?: 'render' | 'execute';
          callback?: (token: string) => void;
          'expired-callback'?: () => void;
          'error-callback'?: (errorCode?: string) => void;
          'timeout-callback'?: () => void;
        },
      ) => string;

      execute: (widgetId?: string) => void;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

type CaptchaStatus = 'loading' | 'ready' | 'verifying' | 'verified' | 'error';

export default function ContactSection() {
  /* =========================================================
     FORM STATE
  ========================================================= */

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  /* =========================================================
     CAPTCHA STATE
  ========================================================= */

  const [captchaToken, setCaptchaToken] = useState('');
  const [captchaStatus, setCaptchaStatus] = useState<CaptchaStatus>('loading');
  const [isRefreshingCaptcha, setIsRefreshingCaptcha] = useState(false);

  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);

  /* =========================================================
     UI STATE
  ========================================================= */

  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* =========================================================
     CLOUDFLARE SITE KEY
  ========================================================= */

  const turnstileSiteKey = process.env.NEXT_PUBLIC_SITEKEY?.trim() || '';

  /* =========================================================
     FORM COMPLETE
  ========================================================= */

  const isFormComplete =
    fullName.trim() !== '' &&
    email.trim() !== '' &&
    phone.trim() !== '' &&
    service.trim() !== '' &&
    message.trim() !== '';

  /* =========================================================
     LOAD TURNSTILE
  ========================================================= */

  useEffect(() => {
    if (!turnstileSiteKey) {
      setCaptchaStatus('error');
      setPopupMessage('CAPTCHA configuration is missing. Please try again later.');
      return;
    }

    let cancelled = false;

    const initializeTurnstile = () => {
      if (cancelled) return;

      if (!window.turnstile) {
        setCaptchaStatus('error');
        setPopupMessage('Unable to load CAPTCHA verification. Please try again later.');
        return;
      }

      if (!turnstileContainerRef.current) {
        setCaptchaStatus('error');
        return;
      }

      if (turnstileWidgetIdRef.current) {
        return;
      }

      try {
        const widgetId = window.turnstile.render(turnstileContainerRef.current, {
          sitekey: turnstileSiteKey,
          size: 'normal',
          execution: 'execute',
          theme: 'light',

          callback: (token: string) => {
            if (cancelled) return;

            setCaptchaToken(token);
            setCaptchaStatus('verified');
            setIsRefreshingCaptcha(false);
            setPopupMessage(null);
          },

          'expired-callback': () => {
            if (cancelled) return;

            setCaptchaToken('');
            setCaptchaStatus('ready');
            setIsRefreshingCaptcha(false);

            setPopupMessage('CAPTCHA verification expired. Please verify again.');
          },

          'error-callback': (errorCode) => {
            if (cancelled) return;

            setCaptchaToken('');
            setCaptchaStatus('error');
            setIsRefreshingCaptcha(false);

            if (errorCode === '110200') {
              setPopupMessage(
                'CAPTCHA domain is not authorized in Cloudflare. Please add this website hostname to Turnstile Hostname Management.',
              );
            } else {
              setPopupMessage('CAPTCHA verification failed. Please try again.');
            }
          },

          'timeout-callback': () => {
            if (cancelled) return;

            setCaptchaToken('');
            setCaptchaStatus('ready');
            setIsRefreshingCaptcha(false);

            setPopupMessage('CAPTCHA verification timed out. Please try again.');
          },
        });

        if (cancelled) {
          try {
            window.turnstile.remove(widgetId);
          } catch {
            // Ignore cleanup error.
          }

          return;
        }

        turnstileWidgetIdRef.current = widgetId;
        setCaptchaStatus('ready');
      } catch {
        setCaptchaStatus('error');

        setPopupMessage('Unable to load CAPTCHA. Please try again later.');
      }
    };

    const existingScript = document.querySelector('script[data-cloudflare-turnstile="true"]');

    if (existingScript) {
      if (window.turnstile) {
        initializeTurnstile();
      } else {
        existingScript.addEventListener('load', initializeTurnstile);
      }

      return () => {
        cancelled = true;

        existingScript.removeEventListener('load', initializeTurnstile);
      };
    }

    const script = document.createElement('script');

    script.src = TURNSTILE_SCRIPT_SRC;
    script.async = true;
    script.defer = true;

    script.setAttribute('data-cloudflare-turnstile', 'true');

    script.addEventListener('load', initializeTurnstile);

    script.addEventListener('error', () => {
      if (cancelled) return;

      setCaptchaStatus('error');

      setPopupMessage('Unable to connect to CAPTCHA service. Please try again later.');
    });

    document.head.appendChild(script);

    return () => {
      cancelled = true;

      script.removeEventListener('load', initializeTurnstile);
    };
  }, [turnstileSiteKey]);

  /* =========================================================
     CLEANUP TURNSTILE
  ========================================================= */

  useEffect(() => {
    return () => {
      if (window.turnstile && turnstileWidgetIdRef.current) {
        try {
          window.turnstile.remove(turnstileWidgetIdRef.current);
        } catch {
          // Ignore cleanup error.
        }
      }

      turnstileWidgetIdRef.current = null;
    };
  }, []);

  /* =========================================================
     AUTO CLOSE POPUP
  ========================================================= */

  useEffect(() => {
    if (!popupMessage) return;

    const timer = window.setTimeout(() => {
      setPopupMessage(null);
    }, 5000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [popupMessage]);

  /* =========================================================
     START CAPTCHA
  ========================================================= */

  function startCaptchaVerification() {
    if (isSubmitting) return;

    if (!isFormComplete) {
      setPopupMessage('Please fill in all required fields before verifying CAPTCHA.');
      return;
    }

    if (!window.turnstile) {
      setCaptchaStatus('error');

      setPopupMessage('CAPTCHA is still loading. Please try again.');

      return;
    }

    if (!turnstileWidgetIdRef.current) {
      setCaptchaStatus('error');

      setPopupMessage('CAPTCHA is not ready. Please refresh the page and try again.');

      return;
    }

    if (captchaToken) return;

    try {
      setCaptchaStatus('verifying');
      setIsRefreshingCaptcha(false);
      setPopupMessage(null);

      window.turnstile.execute(turnstileWidgetIdRef.current);
    } catch {
      setCaptchaStatus('error');

      setPopupMessage('Unable to start CAPTCHA verification. Please try again.');
    }
  }

  /* =========================================================
     RESET CAPTCHA
  ========================================================= */

  function resetTurnstile() {
    setCaptchaToken('');
    setCaptchaStatus('loading');
    setIsRefreshingCaptcha(true);

    if (window.turnstile && turnstileWidgetIdRef.current) {
      try {
        window.turnstile.reset(turnstileWidgetIdRef.current);

        window.setTimeout(() => {
          setCaptchaStatus('ready');
          setIsRefreshingCaptcha(false);
        }, 250);
      } catch {
        setCaptchaStatus('error');
        setIsRefreshingCaptcha(false);

        setPopupMessage('Unable to refresh CAPTCHA. Please try again.');
      }
    } else {
      setCaptchaStatus('error');
      setIsRefreshingCaptcha(false);

      setPopupMessage('CAPTCHA is not available. Please refresh the page.');
    }
  }

  /* =========================================================
     FORM SUBMIT
  ========================================================= */

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedService = service.trim();
    const trimmedMessage = message.trim();

    /* -------------------------------------------------------
       VALIDATION
    ------------------------------------------------------- */

    if (!trimmedName) {
      setPopupMessage('Please enter your full name.');
      return;
    }

    if (!trimmedEmail) {
      setPopupMessage('Please enter your email address.');
      return;
    }

    if (!trimmedPhone) {
      setPopupMessage('Please enter your phone number.');
      return;
    }

    if (!trimmedService) {
      setPopupMessage('Please select a service.');
      return;
    }

    if (!trimmedMessage) {
      setPopupMessage('Please enter your message.');
      return;
    }

    /* -------------------------------------------------------
       SUBMIT
    ------------------------------------------------------- */

    setIsSubmitting(true);
    setPopupMessage(null);

    try {
      await submitWebsiteContact({
        fullName: trimmedName,
        email: trimmedEmail,
        phone: trimmedPhone,
        service: trimmedService,
        message: trimmedMessage,
      });

      setPopupMessage('Thank you! Your message has been received.');

      setFullName('');
      setEmail('');
      setPhone('');
      setService('');
      setMessage('');

      resetTurnstile();
    } catch (error) {
      setPopupMessage(error instanceof Error ? error.message : 'Failed to send your message.');

      resetTurnstile();
    } finally {
      setIsSubmitting(false);
    }
  }

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <section className="contact-section" id="contact-section">
      <div className="contact-container">
        <div className="contact-map-area">
          <div className="contact-city-image contact-location-map">
            <Image
              src="/assets/blogs/image.png"
              alt="Map showing Vishwasai locations in Delhi, Ahilyanagar, Pune, and Mumbai"
              fill
              sizes="(max-width: 1000px) 100vw, 560px"
            />

            <div className="contact-location-list" aria-label="Our locations" />
          </div>
        </div>

        {/* ===================================================
            RIGHT SIDE - CONTACT FORM
        ==================================================== */}

        <div className="contact-form-area">
          <div className="contact-header-row">
            <div className="contact-badge">
              <span>⬢</span>
              GET IN TOUCH
            </div>

            {popupMessage && (
              <div className="contact-popup" role="status" aria-live="polite">
                <span className="contact-popup-dot" aria-hidden="true" />

                <p>{popupMessage}</p>

                <button
                  type="button"
                  onClick={() => setPopupMessage(null)}
                  aria-label="Close message"
                >
                  ×
                </button>
              </div>
            )}
          </div>

          <h2 className="contact-title">Let&apos;s start a conversation</h2>

          {/* =================================================
              FORM
          ================================================== */}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-grid">
              {/* FULL NAME */}

              <input
                type="text"
                name="fullName"
                placeholder="Full Name *"
                value={fullName}
                required
                pattern="^[A-Za-z\s]+$"
                title="Only alphabets are allowed"
                autoComplete="name"
                onInput={(event) => {
                  event.currentTarget.value = event.currentTarget.value.replace(/[^A-Za-z\s]/g, '');
                }}
                onChange={(event) => setFullName(event.target.value)}
              />

              {/* EMAIL */}

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={email}
                required
                autoComplete="email"
                onChange={(event) => setEmail(event.target.value)}
              />

              {/* PHONE */}

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={phone}
                required
                maxLength={10}
                pattern="[0-9]{10}"
                title="Enter a valid 10-digit phone number"
                autoComplete="tel"
                onInput={(event) => {
                  event.currentTarget.value = event.currentTarget.value.replace(/[^0-9]/g, '');
                }}
                onChange={(event) => setPhone(event.target.value)}
              />

              {/* SERVICE */}

              <select
                name="service"
                required
                value={service}
                onChange={(event) => setService(event.target.value)}
              >
                <option value="" disabled>
                  Select a Service *
                </option>

                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* MESSAGE */}

            <textarea
              name="message"
              rows={5}
              placeholder="Your Message *"
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />

            {/* =================================================
                CAPTCHA
            ================================================== */}

            <div className="contact-captcha">
              <label className="captcha-title">CAPTCHA *</label>

              <div
                className={`custom-captcha ${
                  captchaStatus === 'verified' ? 'custom-captcha-verified' : ''
                } ${captchaStatus === 'error' ? 'custom-captcha-error' : ''}`}
              >
                {/* CHECK ICON */}

                <div
                  className={`captcha-check ${
                    captchaStatus === 'verified' ? 'captcha-check-success' : ''
                  } ${captchaStatus === 'verifying' ? 'captcha-check-loading' : ''}`}
                >
                  {captchaStatus === 'verified' ? (
                    <ShieldCheck size={20} />
                  ) : captchaStatus === 'verifying' ? (
                    <RefreshCw size={18} className="captcha-spin" />
                  ) : (
                    <span />
                  )}
                </div>

                {/* CAPTCHA TEXT */}

                <div className="captcha-content">
                  <strong>
                    {captchaStatus === 'verified'
                      ? 'Verification successful'
                      : captchaStatus === 'verifying'
                        ? 'Verifying...'
                        : captchaStatus === 'error'
                          ? 'Verification failed'
                          : !isFormComplete
                            ? 'Complete the form first'
                            : 'Verify you are human'}
                  </strong>

                  <small>
                    {captchaStatus === 'verified'
                      ? 'You can now submit the form.'
                      : captchaStatus === 'verifying'
                        ? 'Cloudflare is checking your request.'
                        : captchaStatus === 'error'
                          ? 'Please try again.'
                          : !isFormComplete
                            ? 'Fill in all required fields.'
                            : 'Click to complete the security check.'}
                  </small>
                </div>

                {/* VERIFY */}

                {captchaStatus !== 'verified' && (
                  <button
                    type="button"
                    className="captcha-verify-button"
                    onClick={startCaptchaVerification}
                    disabled={
                      !isFormComplete ||
                      captchaStatus === 'loading' ||
                      captchaStatus === 'verifying' ||
                      isRefreshingCaptcha ||
                      isSubmitting
                    }
                  >
                    {!isFormComplete
                      ? 'Fill form'
                      : captchaStatus === 'loading'
                        ? 'Loading...'
                        : captchaStatus === 'verifying'
                          ? 'Checking...'
                          : 'I’m human'}
                  </button>
                )}

                {/* REFRESH */}

                {captchaStatus === 'verified' && (
                  <button
                    type="button"
                    className="captcha-refresh-icon-button"
                    onClick={resetTurnstile}
                    disabled={isRefreshingCaptcha || isSubmitting}
                    aria-label="Refresh CAPTCHA"
                  >
                    <RefreshCw size={17} className={isRefreshingCaptcha ? 'captcha-spin' : ''} />
                  </button>
                )}
              </div>

              {/* INVISIBLE TURNSTILE */}

              <div ref={turnstileContainerRef} className="turnstile-invisible" aria-hidden="true" />
            </div>

            {/* SUBMIT */}

            <button
              type="submit"
              className="contact-btn"
              disabled={isSubmitting || !isFormComplete}
            >
              <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>

              <span className="contact-btn-icon">
                <ArrowUpRight size={17} />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
