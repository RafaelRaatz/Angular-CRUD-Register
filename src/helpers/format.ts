export const formatCPF = (cpf: string | number): string => {
  const cpfStr = cpf.toString().padStart(11, '0');
  return cpfStr.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

export const formatDate = (date: string): string => {
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
};
