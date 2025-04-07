import { NotificationProvider } from "./notification/provider";
import { ThemeProvider } from "./theme/provider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NotificationProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </NotificationProvider>
  );
};
