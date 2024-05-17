interface ButtonProps {
    label: string;
    variant?: 'primary' | 'secondary'; 
    onClick: () => void;
    data:  {email: string, password: string }

  }
  
  const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', onClick ,data}) => {
    return (
      <button type="button" className={`${variant} base`} onClick={onClick} disabled={!data}>
        {label}
      </button>
    );
  };
  
  export default Button;