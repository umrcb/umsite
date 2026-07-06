import { getBookings, getFleet, getDashboardStats } from '@/lib/db';
import { getLogs } from '@/lib/logger';
import { routeService } from '@/services/routeService';
import DashboardClient from './DashboardClient';

export default async function AdminDashboard() {
    const [stats, recentBookings, logsData] = await Promise.all([
        getDashboardStats(),
        getBookings(10), // Only fetch latest 10
        getLogs(1, 10)
    ]);

    // Ensure safe defaults
    const safeStats = stats || {
        totalBookings: 0,
        pendingBookings: 0,
        completedBookings: 0,
        revenue: 0,
    };

    const analyticsData = {
        revenueChart: [
            { name: 'Mon', revenue: 0, bookings: 0 },
            { name: 'Tue', revenue: 0, bookings: 0 },
            { name: 'Wed', revenue: 0, bookings: 0 },
            { name: 'Thu', revenue: 0, bookings: 0 },
            { name: 'Fri', revenue: 0, bookings: 0 },
            { name: 'Sat', revenue: 0, bookings: 0 },
            { name: 'Sun', revenue: 0, bookings: 0 },
        ],
        statusPie: [
            { name: 'Pending', value: safeStats.pendingBookings, color: '#f59e0b' },
            { name: 'Completed', value: safeStats.completedBookings || 0, color: '#10b981' },
            { name: 'Cancelled', value: 0, color: '#ef4444' },
        ],
        vehicleBar: [
            { name: 'Car', value: 0 },
            { name: 'GMC', value: 0 },
            { name: 'Hiace', value: 0 },
        ],
        routeBar: [
            { name: 'Jeddah to Makkah', value: 0 },
            { name: 'Makkah to Madinah', value: 0 },
        ]
    };

    const dashboardData = {
        totalBookings: safeStats.totalBookings,
        activeFleet: 0,
        totalFleet: 0,
        pendingBookings: safeStats.pendingBookings,
        confirmedBookings: safeStats.completedBookings || 0,
        routesCount: await routeService.getRoutes().then(r => r.length).catch(() => 0),
        totalRevenue: safeStats.revenue || 0,
        recentBookings: (recentBookings || []).map(b => ({
            ...b,
            id: b.id || (b as any)._id?.toString() || '',
            status: b.status || 'pending'
        })) as any, 
        recentLogs: (logsData ? logsData.logs : []).map(l => ({
            ...l,
            timestamp: new Date(l.timestamp),
            user: l.user || 'Unknown'
        })),
        analyticsData: analyticsData
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white pb-20 md:pb-0">

            <div className="max-w-[1600px] mx-auto">
                <DashboardClient
                    totalBookings={dashboardData.totalBookings}
                    activeFleet={dashboardData.activeFleet}
                    totalFleet={dashboardData.totalFleet}
                    pendingBookings={dashboardData.pendingBookings}
                    confirmedBookings={dashboardData.confirmedBookings}
                    routesCount={dashboardData.routesCount}
                    totalRevenue={dashboardData.totalRevenue}
                    recentBookings={dashboardData.recentBookings}
                    recentLogs={dashboardData.recentLogs}
                    analyticsData={dashboardData.analyticsData}
                />
            </div>
        </div>
    );
}
