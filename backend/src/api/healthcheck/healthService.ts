export const checkHealth = () => {
  // Add any logic to check the health of your application
  return {
    status: 'up',
    timestamp: new Date().toISOString()
  };
};