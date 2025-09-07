import { FormSubmission } from '@/app/types/prize';

export class FormService {
  private static readonly GOOGLE_APPS_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

  static async submitForm(submission: FormSubmission): Promise<{ success: boolean; message: string }> {
    try {
      const response = await fetch(this.GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submission),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Form submission error:', error);
      return {
        success: false,
        message: 'Failed to submit form. Please try again.',
      };
    }
  }
}