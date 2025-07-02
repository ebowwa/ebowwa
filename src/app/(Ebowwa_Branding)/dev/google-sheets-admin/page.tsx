import GoogleSheetsAdmin from '../../../../components/(third-party)/Google/Sheets/admin';

export const metadata = {
  title: 'Google Sheets Admin - Ebowwa Labs',
  description: 'Manage Google Sheets integration for interesting links',
};

export default function GoogleSheetsAdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
              Google Sheets Admin
            </span>
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Configure and test your Google Sheets integration for interesting links.
          </p>
        </div>

        <GoogleSheetsAdmin />

        <div className="mt-12 text-center">
          <a 
            href="/links" 
            className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors"
          >
            View Links Page
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
} 