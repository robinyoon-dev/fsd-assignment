import { DetectLocationGate } from "@/features/detect-location";

export function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Weather Dashboard
      </h1>


      <DetectLocationGate>
        {({ lat, lon }) => (
          <div>
            <div>현재 위치: {lat}, {lon}</div>
            {/* 여기서 weather query를 호출하거나, 위치 기반 화면 렌더 */}
          </div>
        )}
      </DetectLocationGate>




    </main>
  )
}
