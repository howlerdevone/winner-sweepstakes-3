import { useState, useEffect } from 'react';
import { PrizeData } from '@/app/types/prize';
import { PrizeService } from '@/app/services/prizeService';

export const usePrizeData = (prizeId: string) => {
  const [prizeData, setPrizeData] = useState<PrizeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrizeData = () => {
      setLoading(true);
      setError(null);

      try {
        const data = PrizeService.getPrizeById(prizeId);
        if (!data) {
          setError(`Prize with ID "${prizeId}" not found`);
        } else {
          setPrizeData(data);
        }
      } catch (err) {
        setError('Failed to load prize data');
      } finally {
        setLoading(false);
      }
    };

    fetchPrizeData();
  }, [prizeId]);

  return { prizeData, loading, error };
};