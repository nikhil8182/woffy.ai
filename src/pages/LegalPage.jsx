import React from "react";
import { Link } from "react-router-dom";

const content = {
  privacy: {
    title: "Privacy, in plain language.",
    intro:
      "This notice explains how the Woffy website handles the information you choose to share.",
    sections: [
      {
        title: "Build updates",
        text: (
          <>
            When you sign up, we collect your email address and any optional
            name or area of interest you provide. We store these details, the
            signup date and source, and your consent record in Firebase to
            manage the Woffy update list. Signing up gives us permission to
            email you product and development updates.
          </>
        ),
      },
      {
        title: "Chat with Woffy",
        text: (
          <>
            The chat uses your message and recent conversation to answer
            questions. When AI chat is available, this content is sent to OpenAI
            or Google Gemini, depending on the active chat provider, for
            processing. When it is unavailable, the site may show clearly
            labelled answers from our project FAQ. Please do not include
            passwords, private documents, or other sensitive information.
          </>
        ),
      },
      {
        title: "Storage and service providers",
        text: (
          <>
            The website does not save chat history to a long-term chat database.
            Your current conversation stays in the page until it is cleared or
            the page is reloaded. Hosting and AI providers may keep operational
            or security logs under their own policies. We use hosting, database,
            and AI services to operate these features.
          </>
        ),
      },
      {
        title: "Your choices",
        text: (
          <>
            You can stop receiving updates or ask us to remove your signup by
            emailing <a href="mailto:hello@woffy.ai">hello@woffy.ai</a> from the
            address you used. We retain update-list information while you remain
            subscribed and need it to manage the list, unless another retention
            requirement applies.
          </>
        ),
      },
      {
        title: "Website analytics",
        text: (
          <>
            We do not run marketing analytics or advertising trackers on this
            website. See our <Link to="/cookies">cookie notice</Link> for
            information about browser storage and hosting.
          </>
        ),
      },
    ],
  },
  terms: {
    title: "A few things to know.",
    intro:
      "These terms apply to browsing the Woffy website and using its update list and chat.",
    sections: [
      {
        title: "A project in development",
        text: (
          <>
            Woffy is a robotics project from Onwords. The website shares our
            current work and intended direction. Concept illustrations, proposed
            capabilities, and future milestones are not specifications of a
            product available for purchase. Designs and plans may change as
            development continues.
          </>
        ),
      },
      {
        title: "Updates are not a preorder",
        text: (
          <>
            Joining the update list does not place an order, reserve a product,
            or guarantee availability. We do not take purchases or deposits
            through this website. Pricing and launch dates are not confirmed.
          </>
        ),
      },
      {
        title: "Using the chat",
        text: (
          <>
            Chat answers are for general information about Woffy and may be
            incomplete or mistaken. They do not operate a robot, provide
            professional advice, or create commitments on behalf of Woffy.
            Contact us directly if you need a confirmed project detail.
          </>
        ),
      },
      {
        title: "Use the site respectfully",
        text: (
          <>
            Do not use the forms or chat to send unlawful content, impersonate
            others, probe for private information, or disrupt the service. We
            may limit requests or restrict access to protect the website and its
            visitors.
          </>
        ),
      },
      {
        title: "Content and contact",
        text: (
          <>
            Woffy names, original website content, and illustrations belong to
            their respective owners. For permission to reuse materials, a
            project question, or a concern about the site, email{" "}
            <a href="mailto:hello@woffy.ai">hello@woffy.ai</a>.
          </>
        ),
      },
    ],
  },
  cookies: {
    title: "Less tracking. More clarity.",
    intro:
      "This website does not use advertising cookies or marketing analytics trackers.",
    sections: [
      {
        title: "What the website uses",
        text: (
          <>
            The site keeps temporary interface state, such as an open menu or
            the current chat conversation, while the page is open. It does not
            use this state to build advertising profiles. Fonts are served with
            the website.
          </>
        ),
      },
      {
        title: "Hosting and security",
        text: (
          <>
            Our hosting and infrastructure providers may process request
            information or use essential mechanisms to deliver the website,
            prevent abuse, and keep it available. These functions are separate
            from marketing tracking.
          </>
        ),
      },
      {
        title: "Your browser controls",
        text: (
          <>
            You can review or clear website data through your browser settings.
            If we introduce optional tracking in the future, we will update this
            notice and provide the relevant choices before enabling it.
          </>
        ),
      },
      {
        title: "Questions",
        text: (
          <>
            Email <a href="mailto:hello@woffy.ai">hello@woffy.ai</a> about
            website storage or read the{" "}
            <Link to="/privacy">privacy notice</Link> for details about signups
            and chat.
          </>
        ),
      },
    ],
  },
};

export default function LegalPage({ kind = "privacy" }) {
  const page = content[kind] || content.privacy;
  return (
    <div className="page-shell legal-page">
      <header className="page-intro">
        <p className="eyebrow">
          {kind === "cookies"
            ? "Cookie notice"
            : kind === "terms"
              ? "Website terms"
              : "Privacy notice"}
        </p>
        <h1>{page.title}</h1>
        <p className="page-lead">{page.intro}</p>
        <p className="section-note">
          Last updated <time dateTime="2026-09-06">6 September 2026</time>
        </p>
      </header>
      <div className="prose legal-content">
        {page.sections.map(({ title, text }) => (
          <section key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </section>
        ))}
      </div>
      <nav aria-label="Related website policies" className="legal-links">
        <Link
          to="/privacy"
          aria-current={kind === "privacy" ? "page" : undefined}
        >
          Privacy
        </Link>
        <Link to="/terms" aria-current={kind === "terms" ? "page" : undefined}>
          Terms
        </Link>
        <Link
          to="/cookies"
          aria-current={kind === "cookies" ? "page" : undefined}
        >
          Cookies
        </Link>
      </nav>
    </div>
  );
}
