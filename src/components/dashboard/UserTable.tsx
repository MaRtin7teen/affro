import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, ArrowUpDown, Filter, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  };
}

export const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [cityFilter, setCityFilter] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch user data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const cities = Array.from(new Set(users.map(u => u.address.city))).sort();

  const filteredUsers = users
    .filter(user => {
      const matchSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCity = cityFilter === '' || user.address.city === cityFilter;
      return matchSearch && matchCity;
    })
    .sort((a, b) => {
      if (sortOrder === 'asc') return a.name.localeCompare(b.name);
      return b.name.localeCompare(a.name);
    });

  const TableSkeleton = () => (
    <div className="space-y-4 animate-pulse">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-16 bg-gray-100 dark:bg-white/5 rounded-2xl w-full" />
      ))}
    </div>
  );

  return (
    <div className="bg-white dark:bg-dark-sidebar p-8 rounded-[2.5rem] shadow-premium dark:shadow-premium-dark flex-1 transition-colors duration-500 border border-transparent dark:border-white/5">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-text-main dark:text-dark-text tracking-tight">API Integration</h3>
          <p className="text-sm text-text-muted dark:text-dark-muted font-medium mt-1">Dynamic User Data from JSONPlaceholder</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-4 h-4" />
            <input
              type="text"
              placeholder="Search by name/email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 bg-bg-main dark:bg-dark-bg border-none rounded-2xl text-sm outline-none focus:ring-2 focus:ring-primary/20 w-72 dark:text-dark-text transition-all"
            />
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
            className="flex items-center gap-2 px-5 py-3 bg-bg-main dark:bg-dark-bg rounded-2xl text-sm font-bold text-text-main dark:text-dark-text hover:shadow-md transition-all border border-transparent dark:border-white/5"
          >
            <ArrowUpDown className="w-4 h-4 text-primary" />
            Sort: {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
          </motion.button>

          <div className="relative">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-4 h-4" />
            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="pl-12 pr-10 py-3 bg-bg-main dark:bg-dark-bg border-none rounded-2xl text-sm outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer dark:text-dark-text transition-all"
            >
              <option value="">All Cities</option>
              {cities.map(city => <option key={city} value={city}>{city}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        {loading ? (
          <TableSkeleton />
        ) : error ? (
          <div className="py-20 flex flex-col items-center gap-4 text-center">
            <AlertCircle className="w-12 h-12 text-red-500" />
            <p className="text-text-muted dark:text-dark-muted font-medium">{error}</p>
            <button onClick={fetchUsers} className="px-6 py-2 bg-primary text-white rounded-xl font-bold">Retry</button>
          </div>
        ) : (
          <table className="w-full">
            <thead className="text-left border-b border-gray-50 dark:border-white/5 uppercase text-xs font-bold text-text-muted dark:text-dark-muted tracking-wider">
              <tr>
                <th className="pb-6 px-4">Name</th>
                <th className="pb-6 px-4">Email</th>
                <th className="pb-6 px-4">Company</th>
                <th className="pb-6 px-4 text-right">City</th>
              </tr>
            </thead>
            <tbody className="text-sm font-semibold">
              <AnimatePresence>
                {filteredUsers.map((user) => (
                  <motion.tr 
                    key={user.id} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ backgroundColor: 'rgba(93, 95, 239, 0.03)' }}
                    className="group border-b border-gray-50/50 dark:border-white/5 transition-colors cursor-default"
                  >
                    <td className="py-5 px-4 text-[#151D48] dark:text-dark-text">{user.name}</td>
                    <td className="py-5 px-4 text-text-muted dark:text-dark-muted font-medium">{user.email}</td>
                    <td className="py-5 px-4 text-[#151D48] dark:text-dark-text">{user.company.name}</td>
                    <td className="py-5 px-4 text-right">
                      <span className="px-4 py-1.5 rounded-xl bg-bg-main dark:bg-white/5 text-text-muted dark:text-dark-muted text-xs border border-gray-100 dark:border-white/5">
                        {user.address.city}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
