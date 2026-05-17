export default function OSMDigitalChecking() {
  const cards = [
    {
      title: 'Real Login System',
      desc: 'Secure login for Admin, Examiner and Students'
    },
    {
      title: 'Database System',
      desc: 'Store students, results and answer sheet records'
    },
    {
      title: 'QR Code Verification',
      desc: 'Verify answer sheets and results instantly'
    },
    {
      title: 'PDF Upload',
      desc: 'Upload scanned answer sheets and reports'
    },
    {
      title: 'OMR Checking',
      desc: 'Automatic OMR answer evaluation system'
    },
    {
      title: 'Excel Export',
      desc: 'Download result reports in Excel format'
    }
  ];

  const dashboard = [
    {
      title: 'Students',
      value: '1200+'
    },
    {
      title: 'Answer Sheets',
      value: '3500+'
    },
    {
      title: 'Results Generated',
      value: '1000+'
    },
    {
      title: 'Examiners',
      value: '45+'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <header className="bg-slate-900 text-white px-6 py-4 flex flex-col md:flex-row justify-between items-center shadow-lg">
        <h1 className="text-3xl font-bold">OSM DIGITAL CHECKING</h1>

        <nav className="flex gap-5 mt-4 md:mt-0 text-sm md:text-base">
          <a href="#home" className="hover:text-orange-400">Home</a>
          <a href="#features" className="hover:text-orange-400">Features</a>
          <a href="#dashboard" className="hover:text-orange-400">Dashboard</a>
          <a href="#upload" className="hover:text-orange-400">Upload</a>
          <a href="#login" className="hover:text-orange-400">Login</a>
        </nav>
      </header>

      <section
        id="home"
        className="bg-slate-800 text-white py-24 px-6 text-center"
      >
        <h2 className="text-5xl font-bold mb-6">
          Smart Digital Answer Sheet Evaluation System
        </h2>

        <p className="text-xl max-w-3xl mx-auto mb-8">
          Secure OMR Checking, PDF Upload, Result Management and QR Code
          Verification Platform
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold shadow-lg">
            Start Checking
          </button>

          <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-slate-900 transition">
            Admin Login
          </button>
        </div>
      </section>

      <section id="features" className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900">
            Advanced Features
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-xl hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold mb-4 text-slate-900">
                {card.title}
              </h3>

              <p className="text-slate-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="dashboard"
        className="bg-slate-900 text-white py-16 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Admin Dashboard</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {dashboard.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-3xl p-8 text-center shadow-lg"
              >
                <h3 className="text-xl mb-4">{item.title}</h3>
                <h1 className="text-4xl font-bold text-orange-400">
                  {item.value}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="upload" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto bg-slate-100 rounded-3xl p-10 shadow-xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">
            Upload Answer Sheets
          </h2>

          <input
            type="file"
            className="w-full border p-4 rounded-xl bg-white"
          />

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg">
            Upload PDF
          </button>
        </div>
      </section>

      <section id="login" className="py-16 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Examiner Login
            </h3>

            <input
              type="text"
              placeholder="Username"
              className="w-full border p-3 rounded-xl mb-4"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded-xl mb-4"
            />

            <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold">
              Login
            </button>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Student Login
            </h3>

            <input
              type="text"
              placeholder="Student ID"
              className="w-full border p-3 rounded-xl mb-4"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded-xl mb-4"
            />

            <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold">
              Login
            </button>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Admin Login
            </h3>

            <input
              type="text"
              placeholder="Admin ID"
              className="w-full border p-3 rounded-xl mb-4"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded-xl mb-4"
            />

            <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold">
              Login
            </button>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          QR Verification & Result System
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mt-10">
          <div className="bg-slate-800 p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">QR Verification</h3>
            <p>
              Scan QR code to verify answer sheets, hall tickets and results.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Result Export</h3>
            <p>
              Download results in Excel and PDF formats instantly.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white text-center py-6">
        <h3 className="text-2xl font-bold mb-2">OSM DIGITAL CHECKING</h3>

        <p>Digital Evaluation Platform</p>

        <p className="mt-2">© 2026 All Rights Reserved</p>
      </footer>
    </div>
  );
}
