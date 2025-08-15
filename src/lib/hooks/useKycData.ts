import { useState, useEffect } from "react";
import { getKycData } from "@/app/api/mock/route";

export function useKycData() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getKycData();
        setData(response);
      } catch (error) {
        console.error("Error fetching KYC data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading };
}