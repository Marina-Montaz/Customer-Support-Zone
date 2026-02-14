import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Calendar, User } from 'lucide-react';
import ticketsData from './tickets.json';
import vector1 from './assets/vector1.png';
import vector2 from './assets/vector2.png';

const App = () => {
  const [allTickets, setAllTickets] = useState(ticketsData);
  const [inProgress, setInProgress] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [resolvedTitles, setResolvedTitles] = useState([]);

  const addToProgress = (ticket) => {
    if (inProgress.find((t) => t.id === ticket.id)) {
      toast.warning("Ticket is already in progress!");
      return;
    }
    setInProgress([...inProgress, ticket]);
    toast.info(`Ticket ${ticket.id} moved to Task Status`);
  };

  const markAsComplete = (ticket) => {
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));
    setAllTickets(allTickets.filter((t) => t.id !== ticket.id));
    setResolvedCount(resolvedCount + 1);
    setResolvedTitles([...resolvedTitles, ticket.title]);
    toast.success("Task marked as Resolved!");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <ToastContainer />
      {/*Added Navbar */}
      <nav className="flex justify-between items-center px-12 py-5 border-b">
        <h1 className="text-xl font-bold">CS — Ticket System</h1>
        <div className="flex items-center gap-8 text-gray-600 font-medium">
          <a href="#">Home</a><a href="#">FAQ</a><a href="#">Changelog</a>
          <button className="bg-indigo-500 text-white px-5 py-2 rounded-lg font-bold transition hover:bg-indigo-600">+ New Ticket</button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-12">
        
        {/*Added Banner */}
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative rounded-3xl p-10 text-white text-center overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-500">
            <img src={vector1} className="absolute inset-0 opacity-20 object-cover w-full h-full" />
            <h3 className="relative text-xl">In-Progress</h3>
            <p className="relative text-7xl font-bold mt-2">{inProgress.length}</p>
          </div>
          <div className="relative rounded-3xl p-10 text-white text-center overflow-hidden bg-gradient-to-r from-emerald-400 to-teal-500">
            <img src={vector2} className="absolute inset-0 opacity-20 object-cover w-full h-full" />
            <h3 className="relative text-xl">Resolved</h3>
            <p className="relative text-7xl font-bold mt-2">{resolvedCount}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-8">Customer Tickets</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {allTickets.map(ticket => (
                <div key={ticket.id} onClick={() => addToProgress(ticket)} className="p-6 border rounded-2xl cursor-pointer hover:shadow-lg transition">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-bold">{ticket.title}</h4>
                    <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold">● Open</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">{ticket.description}</p>
                  <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    <span>#{ticket.id} <span className="text-red-400 ml-2">{ticket.priority} PRIORITY</span></span>
                    <span className="flex items-center gap-1 font-normal"><User size={12}/> {ticket.customer} <Calendar size={12}/> {ticket.createdAt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <aside>
            <h2 className="text-2xl font-bold mb-4">Task Status</h2>
            <p className="text-gray-400 text-sm mb-6">Select a ticket to add to Task Status</p>
            <div className="space-y-4 mb-12">
              {inProgress.map(t => (
                <div key={t.id} className="bg-gray-50 p-4 rounded-xl flex justify-between items-center border-l-4 border-indigo-500">
                  <span className="font-bold text-sm">{t.title}</span>
                  <button onClick={(e) => {e.stopPropagation(); markAsComplete(t)}} className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-xs font-bold">Complete</button>
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-bold mb-4">Resolved Task</h2>
            <div className="space-y-2">
              {resolvedTitles.map((title, i) => (
                <div key={i} className="text-sm text-gray-500 py-2 border-b">● {title}</div>
              ))}
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-20 px-12 mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">CS — Ticket System</h2>
            <p className="text-gray-400 text-sm">Providing top-tier support management for modern teams.</p>
          </div>
          <div><h4 className="font-bold mb-4">Company</h4><ul className="text-gray-400 text-sm space-y-2"><li>About Us</li><li>Our Mission</li></ul></div>
          <div><h4 className="font-bold mb-4">Services</h4><ul className="text-gray-400 text-sm space-y-2"><li>Product Support</li><li>Customer Stories</li></ul></div>
          <div><h4 className="font-bold mb-4">Information</h4><ul className="text-gray-400 text-sm space-y-2"><li>Privacy Policy</li><li>Terms & Conditions</li></ul></div>
        </div>
      </footer>
    </div>
  );
};
export default App;