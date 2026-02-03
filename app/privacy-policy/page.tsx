import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Optionify Help Center',
  description: 'Privacy Policy for Optionify Shopify App - Learn how we collect, use, and protect your data.',
  openGraph: {
    title: 'Privacy Policy - Optionify',
    description: 'Privacy Policy for Optionify Shopify App',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            1. Introduction
          </h2>
          <p className="text-gray-700 mb-4">
            Welcome to Optionify. We respect your privacy and are committed to protecting your personal data.
            This privacy policy will inform you about how we look after your personal data when you use our
            Shopify app and tell you about your privacy rights and how the law protects you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            2. Data We Collect
          </h2>
          <p className="text-gray-700 mb-4">
            We may collect, use, store and transfer different kinds of personal data about you:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Store Information:</strong> Your Shopify store URL, store name, and contact information</li>
            <li><strong>Product Data:</strong> Information about products and custom options you create using Optionify</li>
            <li><strong>Usage Data:</strong> Information about how you use our app, including features accessed and settings configured</li>
            <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform</li>
            <li><strong>Customer Data:</strong> We do not collect or store your customers&apos; personal information beyond what&apos;s necessary for the app to function</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            3. How We Use Your Data
          </h2>
          <p className="text-gray-700 mb-4">
            We use your data for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>To provide and maintain our Shopify app functionality</li>
            <li>To manage your account and provide customer support</li>
            <li>To improve our app features and user experience</li>
            <li>To send you administrative information, updates, and security alerts</li>
            <li>To monitor usage and troubleshoot technical issues</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            4. Data Sharing and Disclosure
          </h2>
          <p className="text-gray-700 mb-4">
            We do not sell your personal data. We may share your information in the following situations:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Shopify:</strong> As required by the Shopify App Store, certain data is shared with Shopify</li>
            <li><strong>Service Providers:</strong> We may share data with third-party service providers who help us operate our app (e.g., hosting providers, analytics services)</li>
            <li><strong>Legal Requirements:</strong> We may disclose your data if required by law or in response to valid legal requests</li>
            <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            5. Data Security
          </h2>
          <p className="text-gray-700 mb-4">
            We have implemented appropriate security measures to prevent your personal data from being accidentally
            lost, used, accessed, altered, or disclosed in an unauthorized way. We limit access to your personal
            data to those employees, agents, contractors, and other third parties who have a business need to know.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            6. Data Retention
          </h2>
          <p className="text-gray-700 mb-4">
            We will only retain your personal data for as long as necessary to fulfill the purposes we collected
            it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            When you uninstall the app, we will delete or anonymize your data within 30 days, except where we
            are required to retain it for legal purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            7. Your Rights
          </h2>
          <p className="text-gray-700 mb-4">
            Under data protection laws, you have rights including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Access:</strong> Request access to your personal data</li>
            <li><strong>Correction:</strong> Request correction of inaccurate personal data</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data</li>
            <li><strong>Restriction:</strong> Request restriction of processing your personal data</li>
            <li><strong>Portability:</strong> Request transfer of your personal data</li>
            <li><strong>Objection:</strong> Object to processing of your personal data</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            8. GDPR Compliance
          </h2>
          <p className="text-gray-700 mb-4">
            If you are located in the European Economic Area (EEA), we process your personal data based on
            legal grounds including consent, contract fulfillment, legal obligations, and legitimate interests.
            You have the right to withdraw consent at any time and file a complaint with your local supervisory authority.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            9. Cookies
          </h2>
          <p className="text-gray-700 mb-4">
            Our app and help center may use cookies and similar tracking technologies to track activity and
            store certain information. You can instruct your browser to refuse all cookies or to indicate when
            a cookie is being sent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            10. Children&apos;s Privacy
          </h2>
          <p className="text-gray-700 mb-4">
            Our service is not intended for users under the age of 18. We do not knowingly collect personally
            identifiable information from anyone under the age of 18.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            11. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700 mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting
            the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review
            this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            12. Contact Us
          </h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy or want to exercise your privacy rights,
            please contact us:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> privacy@optionify.app
            </p>
            <p className="text-gray-700">
              <strong>Website:</strong> <a href="https://optionify.app" className="text-primary-500 hover:text-primary-600">optionify.app</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
