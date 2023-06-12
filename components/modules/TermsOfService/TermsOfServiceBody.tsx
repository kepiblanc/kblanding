import React, { FC } from "react";

import BulletPointContainer from "../../common/BulletPointContainer";
import ParagraphBody from "@/components/common/ParagraphBody";
import ParagraphHeading from "@/components/common/ParagraphHeading";

const TermsOfServiceBody: FC = () => {
  return (
    <div className="px-2">
      <ParagraphBody
        className="text-center py-8"
        content="Effective Date: 26, May, 2023"
      />

      <ParagraphBody
        content={`
        Please read these Terms of Service ("Terms") carefully before using our 
        ride-hailing services provided through our website or mobile applications (collectively, the "Services"). 
        These Terms govern your access to and use of the Services provided by Kabukabu ("we," "us," or "our"). 
        By using our Services, you agree to be bound by these Terms.
        `}
        className="pb-8"
      />

      <ParagraphHeading content="1. User Eligibility" className="pb-3" />
      <ParagraphBody
        content={`By using our Services, you represent and warrant that you are at least 18 years old and 
        have the legal capacity to enter into these Terms. If you are using the Services on behalf of a company 
        or organization, you represent and warrant that you have the authority to bind that entity to these Terms.
        `}
        className="pb-8"
      />

      <ParagraphHeading content="2. Use of Services" className="pb-3" />
      <ParagraphBody
        content={`2.1. Ride Bookings: Our Services enable you to request rides from 
        independent drivers who are registered with us. By requesting a ride, you agree 
        to be matched with a driver and abide by the driver's terms and conditions.`}
      />
      <ParagraphBody
        content={`2.2. User Conduct: You agree to use our Services responsibly and in compliance with applicable laws and regulations. 
        You will not engage in any unlawful, fraudulent, or abusive conduct while using our Services. Any violation of these Terms may 
        result in the suspension or termination of your access to the Services.`}
      />
      <ParagraphBody
        content={`2.3. Account Security: You are responsible for maintaining the security of 
        your account credentials. You agree to keep your login information confidential and notify us 
        immediately of any unauthorized use or suspected security breach.
        `}
        className="pb-8"
      />

      <ParagraphHeading content="3. Pricing and Payments" className="pb-3" />
      <ParagraphBody
        content={`3.1. Fare Calculation: The fares for rides booked through our 
        Services are calculated based on various factors, including distance, time, 
        and additional charges. We strive to provide transparent fare information, 
        but actual fares may vary depending on factors such as traffic conditions and driver availability.`}
      />
      <ParagraphBody
        content={`3.2. Payment: You agree to pay the fare and any additional charges incurred for the services 
        provided by the driver. Payment may be made through the payment methods available in our Services. 
        We may use third-party payment processors to facilitate transactions, and your use of such processors 
        is subject to their terms and conditions.
        `}
        className="pb-8"
      />

      <ParagraphHeading content="4. Intellectual Property" className="pb-3" />
      <ParagraphBody
        content={`All intellectual property rights in our Services, including but not limited to trademarks, logos, and content, 
        belong to us or our licensors. You are granted a limited, non-exclusive, non-transferable license to use our Services solely for 
        your personal, non-commercial purposes. You shall not modify, distribute, reproduce, or create derivative works based on our Services 
        without our prior written consent.
        `}
        className="pb-8"
      />

      <ParagraphHeading
        content="5. Disclaimer of Warranties"
        className="pb-3"
      />
      <ParagraphBody
        content={`You acknowledge that the Services are provided on an "as is" and 
        "as available" basis. We do not warrant that the Services will be uninterrupted, 
        error-free, or free from viruses or other harmful components. Your use of the 
        Services is at your own risk, and we disclaim all warranties, whether express, 
        implied, or statutory, including but not limited to warranties of merchantability, 
        fitness for a particular purpose, and non-infringement.
        `}
        className="pb-8"
      />

      <ParagraphHeading content="6. Limitation of Liability" className="pb-3" />
      <ParagraphBody
        content={`To the maximum extent permitted by applicable law, we shall not 
        be liable for any indirect, incidental, special, consequential, or exemplary 
        damages arising out of or in connection with your use of the Services. 
        Our total aggregate liability for any claims related to the Services shall 
        not exceed the amount paid by you, if any, for the use of the Services.
        `}
        className="pb-8"
      />

      <ParagraphHeading
        content="7. Modifications to the Terms"
        className="pb-3"
      />
      <ParagraphBody
        content={`We reserve the right to modify these Terms at any time. Any changes to the 
        Terms will be effective upon posting the updated version on our website or mobile applications. 
        It is your responsibility to review the Terms periodically. Continued use of the Services after 
        the posting of changes constitutes your acceptance of the modified Terms.
        `}
        className="pb-8"
      />

      <ParagraphHeading
        content="8. Governing Law and Dispute Resolution"
        className="pb-3"
      />
      <ParagraphBody
        content={`These Terms shall be governed by and construed 
        in accordance with the laws of Lagos State. Any disputes 
        arising out of or relating to these Terms or the Services 
        shall be resolved through binding arbitration in accordance 
        with the rules of The Lagos Court of Arbitration (LCA). 
        The arbitration shall take place in Lagos State, and the 
        language of the arbitration shall be English.
        `}
        className="pb-8"
      />

      <ParagraphHeading content="9. Contact Us" className="pb-3" />
      <ParagraphBody
        content={`If you have any questions or concerns regarding these Terms, 
        please contact us at support@kabukabu.com.ng.
        `}
        className="pb-8"
      />

      <ParagraphBody
        content={`
        By using our Services, you acknowledge that you have read, understood, 
        and agreed to be bound by these Terms of Service.
        `}
        className="pb-8"
      />
    </div>
  );
};

export default TermsOfServiceBody;
