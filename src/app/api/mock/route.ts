import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    newKyc: {
      count: 1245,
      percentageChange: 12.5,
    },
    modifiedKyc: {
      count: 845,
      percentageChange: 5.3,
    },

barChartData: {
  labels: ["Today", "Yesterday"],
  individual: [1200, 1000],
  nonIndividual: [800, 750],
},
    statusCards: [
      { title: "KYC Initiated", value: 1245, color: "bg-blue-500" },
      { title: "Under Process", value: 845, color: "bg-yellow-500" },
      { title: "Registered", value: 620, color: "bg-green-500" },
      { title: "Validated", value: 450, color: "bg-purple-500" },
      { title: "Hold", value: 120, color: "bg-red-500" },
      { title: "Docs Pending", value: 85, color: "bg-orange-500" },
    ],
    individualCategories: {
      ri: 75,
      nri: 25,
    },
    nonIndividualCategories: {
      ri: 60,
      nri: 40,
    },
 

    circularChartData: {
      individual: {
        solicited: {
          solicited: 1200,
          received: 1000,
          consumed: 800,
          pending: 200,
        },
        unsolicited: {
          solicited: 800,
          received: 600,
          consumed: 400,
          pending: 200,
        }
      },
      nonIndividual: {
        solicited: {
          solicited: 900,
          received: 700,
          consumed: 500,
          pending: 200,
        },
        unsolicited: {
          solicited: 600,
          received: 400,
          consumed: 300,
          pending: 100,
        }
      }
    },
    panStats: {
      withImage: 950,
      withoutImage: 250,
    },
    dataStats: {
      withImage: 850,
      withoutImage: 150,
    },
  };

  return NextResponse.json(data);
}

export const getKycData = async () => {
  const response = await fetch("/api/mock");
  return response.json();
};
