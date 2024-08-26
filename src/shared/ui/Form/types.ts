export interface FormProps {
  inputChecking: string;
  setInputChecking: (value: string) => void;
  resultCheckingInput?: boolean;
  children: React.ReactNode;
}
