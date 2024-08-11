"use client";

import { Package, TrendingDown, TrendingUp } from "lucide-react";
import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import StatCard from "./StatCard";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts></CardPopularProducts>
      <CardSalesSummary></CardSalesSummary>
      <CardPurchaseSummary></CardPurchaseSummary>
      <CardExpenseSummary></CardExpenseSummary>
      <StatCard
        title="Customer & Expenses"
        primaryIcon={<Package className="text-blue-600 w-6 h-6"></Package>}
        dateRange="22-29 October 2023"
        details={[
          {
            title: "Customer Growth",
            amount: "175.00",
            changePercentage: 131,
            IconComponent: TrendingUp,
          },
          {
            title: "Expenses",
            amount: "10.00",
            changePercentage: -56,
            IconComponent: TrendingDown,
          },
        ]}
      ></StatCard>
      <StatCard
        title="Dues & Pending Orders"
        primaryIcon={<Package className="text-blue-600 w-6 h-6"></Package>}
        dateRange="22-29 October 2023"
        details={[
          {
            title: "Dues",
            amount: "175.00",
            changePercentage: 131,
            IconComponent: TrendingUp,
          },
          {
            title: "Expenses",
            amount: "175.00",
            changePercentage: -131,
            IconComponent: TrendingDown,
          },
        ]}
      ></StatCard>
      <StatCard
        title="Sales & Discounts"
        primaryIcon={<Package className="text-blue-600 w-6 h-6"></Package>}
        dateRange="22-29 October 2023"
        details={[
          {
            title: "Sales",
            amount: "175.00",
            changePercentage: -131,
            IconComponent: TrendingDown,
          },
          {
            title: "Discounts",
            amount: "175.00",
            changePercentage: 131,
            IconComponent: TrendingUp,
          },
        ]}
      ></StatCard>
    </div>
  );
};

export default Dashboard;
