import FooterWithLogo from "@/components/Footer";
import Header from "@/components/navbars/Header";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

const Policy = () => {
  const onButtonClick = () => {
    window.open(
      "https://www.mediafire.com/file/bztdz0t68jz6d1j/iRA_Privacy_Policy.pdf/file",
      "_blank"
    );
  };
  return (
    <div>
      <Header />
      <div className="p-5 lg:px-80 mt-10 font-extrabold text-4xl lg:text-5xl heading-text">
        <span>iRA Privacy Policy</span>
      </div>
      <div className="px-10 py-5 lg:px-80 sub-text text-sm lg:text-lg">
        <p>
          This Privacy Policy is an electronic agreement formed under the
          Information Technology Act, 2000 and the rules made thereunder (as
          amended till date). This privacy policy is a legally binding document
          between the user and iRA. The terms of this privacy policy will be
          effective upon your use of the services provided through the iRA
          platform and will govern the relationship between user and iRA for all
          the usages of the platform.
        </p>
        <br />
        <p className="font-bold">
          1. INFORMATION COLLECTED AND USE OF INFORMATION
        </p>
        <br />

        <p>
          We collect certain information including certain personal information
          from you when:
        </p>
        <p>(a) you use or register yourself on the iRA platform,</p>
        <p>
          (b) when you use our services, such as location, platform usage, and
          device data;
        </p>
        <p>
          (c) when you communicate with us through inquiries, grievances, or
          feedback, etc.
        </p>
        <br />
        <p className="font-bold">2. RETENTION</p>
        <br />
        <p>
          All information including personal information collected mentioned
          under this Privacy Policy shall only be retained by iRA for as long as
          is necessary to perform its obligations as set out under Terms of
          Service and in compliance with the applicable statutory/ regulatory
          requirements and no longer.
        </p>
        <br />
        <p>
          Users may request deletion of their accounts at any time. iRA may
          retain user data after a deletion request due to legal or regulatory
          requirements or for reasons stated in this policy. The length for
          which iRA retains user data may further be determined by legal and
          regulatory requirements, purposes of safety, security and fraud
          prevention, or by issues relating to the user’s account such as an
          outstanding credit or an unresolved claim or dispute.
        </p>
        <br />
        <p className="font-bold">3. RIGHTS</p>
        <br />
        <p>
          You shall have the right to access your profile on the platform at any
          time to add, remove or modify your information that you have provided,
          after which point iRA shall only use such revised information. Your
          addition, removal or modification of the information shall not
          prejudice any prior use by iRA thereof. You shall, however, commit to
          only providing information that is true and accurate.
        </p>
        <br />
        <p className="font-bold">4. DATA SECURITY</p>
        <br />
        <p>
          iRA shall take all organizational and technical measures required
          under any law or statute applicable to protect the confidentiality and
          security of the information in their control. iRA shall ensure that
          data is encrypted in transit as well as at rest.
        </p>
        <br />
        <p className="font-bold">5. DISCLOSURES AND TRANSFER</p>
        <br />
        <p>
          We share your information with third parties for various purposes as
          detailed herein below:
        </p>
        <br />
        <p className="font-bold">6. GRIEVANCES</p>
        <br />
        <p>
          If You have grievance or complaint, questions, comments, concerns or
          feedback in relation to the processing of information or regarding
          this Privacy Policy or any other privacy or security concern, send an
          email to [iRA support email address].
        </p>
        <br />
        <p>
          You may address any complaints or discrepancies in relation to the
          processing of Your Personal Information to the grievance officer,
          mentioned herein below.
        </p>
        <br />
        <p className="font-bold">7. Grievance Officer:</p>
        <br />
        <p>Ramar G</p>
        <p>Founder - iRA</p>
        <p>
          Email :{" "}
          <Link href="mailto:mention.ira@gmail.com" className="underline">
            mention.ira@gmail.com
          </Link>
        </p>
        <br />
        <p className="font-bold">8. UPDATES</p>
        <br />
        <p>
          We may occasionally update this notice. If we make significant
          changes, we will notify users in advance of the changes through the
          iRA platform or through other means, such as email. We encourage users
          to periodically review this notice for the latest information on our
          privacy practices.
        </p>
        <div className="py-5 ">
          <Button className="bg-[#176b87]" onClick={onButtonClick}>
            Download PDF
          </Button>
        </div>
      </div>

      <FooterWithLogo />
    </div>
  );
};

export default Policy;
