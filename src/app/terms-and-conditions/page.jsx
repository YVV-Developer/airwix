export default function TermsAndConditionsPage() {
  return (
    <section className="bg-white text-gray-800 mx-auto mt-0.5 ">
      <div className="p-6 rounded-lg bg-indigo-50">
        <h1 className="mb-10 text-4xl font-bold text-center text-indigo-700">
          Terms and Conditions
        </h1>

        <p className="max-w-5xl mx-auto mb-6 text-center">
          These Terms and Conditions ("Terms") govern your access to and use of
          our ERP Software (“Software”) and related services (“Services”). By
          accessing or using our Services, you agree to be bound by these Terms.
        </p>
      </div>

      <div className="max-w-5xl p-6 mx-auto">
        {/* Section 1 */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">
          1. Acceptance of Terms
        </h2>
        <p className="mb-4">
          By using our ERP software, you confirm that you are legally capable of
          entering into this agreement and agree to abide by all terms outlined
          herein. If you do not agree with any part of these Terms, please
          refrain from using the Software.
        </p>

        {/* Section 2 */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">
          2. License and Access
        </h2>
        <p className="mb-4">
          We grant you a limited, non-exclusive, non-transferable, and revocable
          license to use the ERP Software strictly in accordance with these
          Terms and any applicable agreement or subscription.
        </p>

        {/* Section 3 */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">
          3. User Responsibilities
        </h2>
        <ul className="pl-6 mb-4 space-y-2 list-disc">
          <li>
            You must provide accurate information and maintain the security of
            your login credentials.
          </li>
          <li>
            You agree not to misuse the ERP software for any illegal or
            unauthorized activity.
          </li>
          <li>
            You are responsible for all activity that occurs under your account.
          </li>
        </ul>

        {/* Section 4 */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">
          4. Data Privacy & Security
        </h2>
        <p className="mb-4">
          We take your privacy seriously. Any data you input into the ERP system
          will be handled in accordance with our{" "}
          <a href="/privacy" className="text-blue-600 underline">
            Privacy Policy
          </a>
          . You are responsible for the integrity of your data.
        </p>

        {/* Section 5 */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">
          5. Payment & Subscription
        </h2>
        <p className="mb-4">
          Access to certain features may require a paid subscription. All
          payments are non-refundable unless otherwise stated. Late payments may
          result in suspension or termination of access.
        </p>

        {/* Section 6 */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">
          6. Intellectual Property
        </h2>
        <p className="mb-4">
          All content, features, and functionality of the ERP Software
          (including code, design, graphics, and trademarks) are owned by us or
          our licensors and are protected by copyright and intellectual property
          laws.
        </p>

        {/* Section 7 */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">
          7. Limitation of Liability
        </h2>
        <p className="mb-4">
          We are not liable for any indirect, incidental, or consequential
          damages arising from your use or inability to use the Software. Your
          use of the Software is at your own risk.
        </p>

        {/* Section 8 */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">8. Termination</h2>
        <p className="mb-4">
          We reserve the right to suspend or terminate your access to the
          Software at any time for violations of these Terms or misuse of the
          platform.
        </p>

        {/* Section 9 */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">9. Modifications</h2>
        <p className="mb-4">
          We may update these Terms from time to time. Continued use of the
          Software after changes means you accept the updated Terms.
        </p>

        {/* Section 10 */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold">10. Contact</h2>
        <p className="mb-4">
          If you have questions about these Terms, please contact us at{" "}
          <a
            href="mailto:support@erpcompany.com"
            className="text-blue-600 underline"
          >
            support@erpcompany.com
          </a>
          .
        </p>

        <p className="mt-12 text-sm text-center text-gray-500">
          Last updated: July 11, 2025
        </p>
      </div>
    </section>
  );
}
