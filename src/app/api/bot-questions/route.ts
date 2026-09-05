import { NextResponse } from 'next/server';

const BOT_QUESTIONS = [
  {
    id: 'q1',
    question: 'How can I participate in your events?',
    answer:
      'You can register as a delegate, speaker, sponsor, or partner. Visit our Events page or contact our team for details.',
  },
  {
    id: 'q2',
    question: 'How can I contact vishwasai.in?',
    answer:
      'You can contact vishwasai.in via the Contact page, email at contact@vishwasai.in, or phone at +91 7506035537.',
  },
  {
    id: 'q3',
    question: 'What services does vishwasai.in offer?',
    answer:
      'vishwasai.in offers B2B marketing, executive events, ABM campaigns, research studies, and digital engagement solutions.',
  },
  {
    id: 'q4',
    question: 'Who attends vishwasai.in events?',
    answer:
      'Our events typically bring together CIOs, CXOs, CISOs, IT leaders, founders, technology providers, and senior business decision-makers.',
  },
];

export async function GET() {
  return NextResponse.json(BOT_QUESTIONS);
}
