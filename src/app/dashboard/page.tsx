"use client";
import { FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import { KycBarChart } from "@/components/charts/BarChart";
import { CircularChart } from "@/components/charts/CircularChart";
import { StatusCard } from "@/components/ui/StatusCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { useKycData } from "@/lib/hooks/useKycData";
import { DashboardSkeleton } from "@/components/skeletons/DashboardSkeleton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DashboardPage() {
  const [viewType, setViewType] = useState<"individual" | "nonIndividual">("individual");
  const [activeTab, setActiveTab] = useState<"today" | "month" | "custom">("today");
  const [solicitedType, setSolicitedType] = useState<"solicited" | "unsolicited">("solicited");
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const { data, isLoading } = useKycData();
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  if (isLoading) return <DashboardSkeleton />;

  const solicitedButton = (label: string, value: "solicited" | "unsolicited") => (
    <button
      onClick={() => setSolicitedType(value)}
      className={`px-2 sm:px-3 py-1 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm
        ${solicitedType === value
          ? "bg-blue-500 text-white shadow-sm"
          : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
    >
      {label}
    </button>
  );

  const getChartData = () => {
    if (viewType === "individual") {
      return data.circularChartData.individual[solicitedType];
    } else {
      return data.circularChartData.nonIndividual[solicitedType];
    }
  };

  const tabButton = (label: string, value: "today" | "month" | "custom") => (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm
        ${activeTab === value
          ? "bg-blue-500 text-white shadow-md"
          : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
    >
      {label}
    </button>
  );

  const viewButton = (label: string, value: "individual" | "nonIndividual") => (
    <button
      onClick={() => setViewType(value)}
      className={`px-2 sm:px-3 py-1 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm
        ${viewType === value
          ? "bg-blue-500 text-white shadow-sm"
          : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
    >
      {label}
    </button>
  );

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
        {/* Title & Breadcrumb */}
        <div className="flex flex-col">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100">
            AXis MF
          </h1>
          <ol className="flex flex-wrap items-center space-x-1 sm:space-x-2 mt-1 text-xs sm:text-sm">
            <li>
              <Link
                href="/"
                className="font-medium text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                Home
              </Link>
            </li>
            {paths.map((path, index) => (
              <li key={path} className="flex items-center">
                <FiChevronRight className="mx-1 text-gray-400 text-xs sm:text-sm" />
                <Link
                  href={`/${paths.slice(0, index + 1).join("/")}`}
                  className="capitalize text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  {path}
                </Link>
              </li>
            ))}
          </ol>
        </div>

        {/* Tabs & Date Picker */}
        <div className="flex flex-wrap gap-2 items-center">
          <div className="flex flex-wrap gap-2">
            {tabButton("Today", "today")}
            {tabButton("Month", "month")}
            {tabButton("Custom", "custom")}
          </div>
          <div className="relative">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd MMM yyyy"
              className="w-full sm:w-auto px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
            />
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* New & Modified KYCs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 md:p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-sm md:text-base font-medium mb-2 sm:mb-4 text-gray-700 dark:text-gray-200">New KYC</h3>
              <div className="flex items-end">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">{data.newKyc.count}</span>
                <span className="ml-2 text-green-500 font-medium text-xs sm:text-sm">↑ {data.newKyc.percentageChange}%</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 md:p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-sm md:text-base font-medium mb-2 sm:mb-4 text-gray-700 dark:text-gray-200">Modified KYC</h3>
              <div className="flex items-end">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">{data.modifiedKyc.count}</span>
                <span className="ml-2 text-red-500 font-medium text-xs sm:text-sm">↓ {data.modifiedKyc.percentageChange}%</span>
              </div>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 md:p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-200">
            <KycBarChart data={data.barChartData} />
          </div>

          {/* Status Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
            {data.statusCards.map((card) => (
              <StatusCard key={card.title} {...card} />
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Categories */}
          <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 md:p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-200">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3 sm:mb-4">
              <h3 className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-200">Categories</h3>
              <div className="flex gap-2">
                {viewButton("Individual", "individual")}
                {viewButton("Non-Individual", "nonIndividual")}
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {viewType === "individual" ? (
                <>
                  <ProgressBar label="RI" value={data.individualCategories.ri} />
                  <ProgressBar label="NRI" value={data.individualCategories.nri} />
                </>
              ) : (
                <>
                  <ProgressBar label="RI" value={data.nonIndividualCategories.ri} />
                  <ProgressBar label="NRI" value={data.nonIndividualCategories.nri} />
                </>
              )}
            </div>
          </div>

          {/* Circular Chart */}
          <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 md:p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-200">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3 sm:mb-4">
              <h3 className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-200">Solicited & Unsolicited</h3>
              <div className="flex flex-wrap gap-2">
                {solicitedButton("Solicited", "solicited")}
                {solicitedButton("Unsolicited", "unsolicited")}
                <div className="hidden sm:flex gap-2">
                  {viewButton("Ind", "individual")}
                  {viewButton("Non-Ind", "nonIndividual")}
                </div>
              </div>
            </div>
            <div className="h-60 sm:h-56 md:h-64">
              <CircularChart data={getChartData()} />
            </div>
          </div>

          {/* PAN & Data Stats */}
          <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-200 mb-3">PAN & Data Stats</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <h4 className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">No. Of PANs Solicited</h4>
                  </div>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 mt-1 sm:mt-2 ml-6 sm:ml-7">
                    <p className="text-xs sm:text-sm">400 KF:n KIA</p>
                    <p className="text-xs sm:text-sm">250 With Image</p>
                    <p className="text-xs sm:text-sm">256 Without Image</p>
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-gray-200">956</div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h4 className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">Data Received</h4>
                  </div>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 mt-1 sm:mt-2 ml-6 sm:ml-7">
                    <p className="text-xs sm:text-sm">300 KF:n KIA</p>
                    <p className="text-xs sm:text-sm">100 With Image</p>
                    <p className="text-xs sm:text-sm">20 Without Image</p>
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-gray-200">320</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}