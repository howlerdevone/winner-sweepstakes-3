import { useState } from 'react';
import { FormData, FormSubmission } from '@/app/types/prize';
import { FormService } from '@/app/services/formService';

export const useEntryForm = (prizeId: string) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    const submission: FormSubmission = {
      ...formData,
      prizeId,
      timestamp: new Date(),
    };

    const result = await FormService.submitForm(submission);
    setSubmitResult(result);
    
    if (result.success) {
      // Reset form on success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      });
    }
    
    setIsSubmitting(false);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    });
    setSubmitResult(null);
  };

  return {
    formData,
    isSubmitting,
    submitResult,
    handleChange,
    handleSubmit,
    resetForm,
  };
};