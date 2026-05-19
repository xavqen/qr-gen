import { Metadata } from "next";
import AdSection from "@/components/ad-section";

export const metadata: Metadata = {
  title: "Privacy Policy - QR Code Generator",
  description: "Read our privacy policy to understand how we handle your data. QRGen is committed to protecting your privacy.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: May 2024</p>
      </div>

      <AdSection format="horizontal" className="mb-8" />

      <div className="prose dark:prose-invert max-w-none">
        <h2>1. Information We Collect</h2>
        <p>
          QRGen is designed with privacy in mind. We do not store any of the content 
          you enter to generate QR codes. All QR code generation happens in real-time 
          and the data is processed only to create your QR code image.
        </p>

        <h2>2. How We Use Information</h2>
        <p>
          We use anonymous usage analytics to improve our service. This includes 
          page views and feature usage statistics. No personal data is collected 
          or stored.
        </p>

        <h2>3. Cookies and Tracking</h2>
        <p>
          We use essential cookies to maintain your preferences such as dark/light 
          mode. We may use Google Analytics for anonymous traffic analysis. You 
          can opt out of tracking through your browser settings.
        </p>

        <h2>4. Third-Party Services</h2>
        <p>
          We may display advertisements through Google AdSense. These third parties 
          may use cookies to serve personalized ads. Please refer to Google's 
          privacy policy for more information.
        </p>

        <h2>5. Data Security</h2>
        <p>
          All communications with our server are encrypted using HTTPS. We do not 
          store your QR code content on our servers after generation is complete.
        </p>

        <h2>6. Children's Privacy</h2>
        <p>
          Our service is not directed at children under 13. We do not knowingly 
          collect personal information from children.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will notify 
          users of any significant changes by posting the new policy on this page.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this privacy policy, please contact us 
          at privacy@qrgen.com.
        </p>
      </div>

      <AdSection format="horizontal" className="mt-8" />
    </div>
  );
}
