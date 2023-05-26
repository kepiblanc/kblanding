import React, { FC } from "react";

import ParagraphHeading from "./ParagraphHeading";
import ParagraphBody from "./ParagraphBody";
import BulletPointContainer from "./BulletPointContainer";

const PolicyBody: FC = () => {
  return (
    <div className="px-2">
      <ParagraphBody
        className="text-center py-8"
        content="Effective Date: 26, May, 2023"
      />

      <ParagraphBody
        content={`This Privacy Policy describes how [Your Ride-Hailing Company Name]
        ("we," "us," or "our") collects, uses, and shares personal information
        when you use our ride-hailing services, website, and mobile applications
        (collectively, the "Services"). We are committed to protecting your
        privacy and ensuring the security of your personal information. By using
        our Services, you consent to the practices described in this Privacy
        Policy.`}
        className="pb-8"
      />
      <ParagraphHeading content="1. Information We Collect" className="pb-3" />
      <ParagraphBody
        content={`1.1. Personal Information: We may collect personal information from you when you create an account, request or use our ride-hailing services, 
        communicate with our customer support, or interact with our website or mobile applications. The types of personal information we may collect 
        include:`}
      />
      <BulletPointContainer
        points={[
          "Name",
          "Contact information (e.g., email address, phone number)",
          "Payment information (e.g., credit card details)",
          "Location information",
          "Profile picture",
          "User preferences and settings",
        ]}
      />

      <ParagraphHeading
        content="1.2. Usage Information: We may collect information about your use of our Services, including:"
        className="pt-12 pb-3"
      />
      <BulletPointContainer
        points={[
          "Trip details (e.g., pickup and drop-off locations, distance, duration)",
          "Ratings and feedback provided by you or other users",
          "Device information (e.g., device type, operating system)",
          "Log data (e.g., IP address, access times, browser type)",
          "Cookies and similar technologies",
        ]}
      />

      <ParagraphHeading
        content="2. How We Use Your Information"
        className="pt-12 pb-2"
      />
      <ParagraphBody content="2.1. Providing and Improving Services: We use your personal information to:" />
      <BulletPointContainer
        points={[
          "Facilitate ride bookings and provide transportation services",
          "Process payments and verify financial transactions",
          "Communicate with you regarding your trips, account, and support requests",
          "Personalize and improve our Services",
          "Ensure the safety and security of our users and Services",
        ]}
      />
      <ParagraphBody
        className="py-2"
        content="2.2. Marketing and Promotional Communications: With your consent, we may use your contact information to send you promotional materials, 
        newsletters, and other marketing communications. You can opt out of receiving such communications at any time."
      />
      <ParagraphBody
        content="2.3. Legal Compliance: We may use your information as necessary to comply with applicable laws, regulations, or legal processes, and to protect 
        and defend our rights and interests."
      />

      <ParagraphHeading
        className="pt-12 pb-3"
        content="Information Sharing and Disclosure"
      />
      <ParagraphBody
        className="pb-10"
        content="3.1. Service Providers: We may share your personal information with trusted third-party service providers who assist us in delivering our Services 
        (e.g., payment processors, customer support providers). These service providers are contractually obligated to handle your information securely 
        and only for the purposes specified by us.
        "
      />

      <ParagraphBody
        className="pb-10"
        content="3.2. Legal Requirements: We may disclose your information if required by law, regulation, or legal process, or if we believe it is necessary to protect 
        our rights, property, or safety, or the rights, property, or safety of others.
        "
      />

      <ParagraphBody
        className="pb-10"
        content="3.3. Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred to 
        the acquiring entity or other third parties involved in the transaction.
        "
      />

      <ParagraphBody content="1. Data Retention and Security" />
      <ParagraphBody
        className="pb-10"
        content="We retain your personal information for as long as necessary to fulfil the purposes outlined in this Privacy Policy, unless a longer retention period is 
        required or permitted by law. We implement reasonable security measures to protect your information against unauthorized access, disclosure, 
        alteration, or destruction."
      />

      <ParagraphBody content="1. Your Rights and Choices" />
      <ParagraphBody
        className="pb-10"
        content={`You have certain rights regarding your personal information, including the right to access, update, or delete your information. You may also have the 
        right to object to or restrict certain processing activities or to withdraw consent where applicable. To exercise these rights, please contact us using 
        the information provided in the "Contact Us" section below.`}
      />

      <ParagraphBody content="1. Changes to this Privacy Policy" />
      <ParagraphBody
        className="pb-10"
        content={`
        We may update this Privacy Policy from time to time`}
      />
    </div>
  );
};

export default PolicyBody;
