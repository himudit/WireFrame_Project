import React, { useState } from 'react';
import { ArrowLeft, Activity, Droplet, Users } from 'lucide-react';

function App() {
  const [isHovered, setIsHovered] = useState(false);
  
  const currentDate = new Date().toLocaleString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-6">
      <div className="max-w-6xl mx-auto glass-effect rounded-3xl shadow-2xl p-8 transform transition-all duration-500">
        {/* Header */}
        <div className="border-b border-emerald-100 pb-4 flex items-center justify-between">
          <div className="flex items-center">
            <button className="p-3 hover:bg-emerald-50 rounded-xl transition-all duration-300 transform hover:scale-110">
              <ArrowLeft className="w-6 h-6 text-emerald-600" />
            </button>
            <div className="ml-4 text-emerald-700 font-medium">{currentDate}</div>
          </div>
          <div className="flex space-x-4">
            <Activity className="w-6 h-6 text-emerald-500 animate-pulse" />
            <Droplet className="w-6 h-6 text-cyan-500 animate-bounce" />
            <Users className="w-6 h-6 text-teal-500 animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 mt-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* RBC Section */}
            <div className="card-3d border border-emerald-100 rounded-2xl overflow-hidden bg-white">
              <div className="bg-emerald-50 px-6 py-3 flex items-center justify-between">
                <span className="font-semibold text-emerald-700">RBC</span>
                <Droplet className="w-5 h-5 text-emerald-500" />
              </div>
              <table className="w-full table-hover">
                <thead className="bg-emerald-50/50">
                  <tr>
                    <th className="text-left px-6 py-3 text-emerald-700">Type</th>
                    <th className="text-left px-6 py-3 text-emerald-700">Count</th>
                    <th className="text-left px-6 py-3 text-emerald-700">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-emerald-50">
                    <td className="px-6 py-3">Angled Cells</td>
                    <td className="px-6 py-3">222</td>
                    <td className="px-6 py-3">67%</td>
                  </tr>
                  <tr className="border-b border-emerald-50">
                    <td className="px-6 py-3">Borderline Ovalocytes</td>
                    <td className="px-6 py-3">50</td>
                    <td className="px-6 py-3">20%</td>
                  </tr>
                  <tr className="border-b border-emerald-50">
                    <td className="px-6 py-3">Burr Cells</td>
                    <td className="px-6 py-3">87</td>
                    <td className="px-6 py-3">34%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">Fragmented Cells</td>
                    <td className="px-6 py-3">2</td>
                    <td className="px-6 py-3">0.12%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* WBC Section */}
            <div className="card-3d border border-cyan-100 rounded-2xl overflow-hidden bg-white">
              <div className="bg-cyan-50 px-6 py-3 flex items-center justify-between">
                <span className="font-semibold text-cyan-700">WBC</span>
                <Users className="w-5 h-5 text-cyan-500" />
              </div>
              <table className="w-full table-hover">
                <thead className="bg-cyan-50/50">
                  <tr>
                    <th className="text-left px-6 py-3 text-cyan-700">Type</th>
                    <th className="text-left px-6 py-3 text-cyan-700">Count</th>
                    <th className="text-left px-6 py-3 text-cyan-700">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-cyan-50">
                    <td className="px-6 py-3">Basophil</td>
                    <td className="px-6 py-3">222</td>
                    <td className="px-6 py-3">67%</td>
                  </tr>
                  <tr className="border-b border-cyan-50">
                    <td className="px-6 py-3">Eosinophil</td>
                    <td className="px-6 py-3">50</td>
                    <td className="px-6 py-3">20%</td>
                  </tr>
                  <tr className="border-b border-cyan-50">
                    <td className="px-6 py-3">Lymphocyte</td>
                    <td className="px-6 py-3">87</td>
                    <td className="px-6 py-3">34%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">Monocyte</td>
                    <td className="px-6 py-3">2</td>
                    <td className="px-6 py-3">0.12%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Platelets Section */}
            <div className="card-3d border border-teal-100 rounded-2xl overflow-hidden bg-white">
              <div className="bg-teal-50 px-6 py-3 flex items-center justify-between">
                <span className="font-semibold text-teal-700">Platelets</span>
                <Activity className="w-5 h-5 text-teal-500" />
              </div>
              <table className="w-full table-hover">
                <tbody>
                  <tr className="border-b border-teal-50">
                    <td className="px-6 py-3">Count</td>
                    <td className="px-6 py-3">222</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">Percentage</td>
                    <td className="px-6 py-3">222</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div 
              className="card-3d border border-emerald-100 rounded-2xl p-6 bg-white"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <h2 className="text-center font-semibold text-emerald-700 text-xl mb-4">WSI</h2>
              <h3 className="text-center text-lg text-emerald-600 mb-2">Zoomed out View</h3>
              <p className="text-center text-emerald-500 mb-6">(Hub)</p>
              <div className="border-t border-emerald-100 mt-4 pt-4">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center py-2 px-4 bg-emerald-50 rounded-lg text-emerald-700">Patient ID</div>
                  <div className="text-center py-2 px-4 bg-emerald-50 rounded-lg text-emerald-700">Blood</div>
                </div>
              </div>
            </div>

            <div className="card-3d border border-cyan-100 rounded-2xl p-6 bg-white">
              <h2 className="text-center font-semibold text-cyan-700 text-xl mb-4">WSI</h2>
              <h3 className="text-center text-lg text-cyan-600">Zoomed IN View</h3>
              <div className="mt-4 h-40 bg-cyan-50/30 rounded-lg flex items-center justify-center">
                <div className="animate-float">
                  <Activity className="w-12 h-12 text-cyan-500" />
                </div>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl py-3 px-6 font-medium shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-teal-600">
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;