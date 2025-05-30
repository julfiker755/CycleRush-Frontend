import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./fonts.css";
import { ThemeProvider } from "./providers/theme-provider.tsx";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "react-photo-view/dist/react-photo-view.css";
import "react-inner-image-zoom/lib/styles.min.css";
import router from "./routes/index.tsx";
import { persistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <RouterProvider router={router} />
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
