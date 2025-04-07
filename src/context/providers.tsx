import { ItemProvider } from "./item/provider";
import { NotificationProvider } from "./notification/provider";
import { ThemeProvider } from "./theme/provider";
import { UserProvider } from "./user/providers";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NotificationProvider>
      <UserProvider>
        <ThemeProvider>
          <ItemProvider>{children}</ItemProvider>
        </ThemeProvider>
      </UserProvider>
    </NotificationProvider>
  );
};
