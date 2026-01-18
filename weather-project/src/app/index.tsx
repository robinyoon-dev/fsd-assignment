import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import { Providers } from "@/app/providers";
import { queryClient } from "@/shared/api/query-client.ts";
import { router } from "./router";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers router={router} client={queryClient} />
  </StrictMode>,
)
