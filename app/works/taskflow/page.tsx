import Link from "next/link";
import Navbar from "../../../components/Navbar";
import BackToTop from "../../../components/BackToTop";
export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#111111] text-white px-6 md:px-10">
        <div className="max-w-5xl mx-auto py-20">
          <p className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-4">
            Works Detail
          </p>
          <Link
            href="/#works"
            className="inline-flex items-center gap-2 text-sm md:text-base text-gray-300 hover:text-white transition mb-8 px-3 py-2 rounded-md hover:bg-white/10"
          >
            ← Works一覧に戻る
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            TaskFlow
          </h1>

          <p className="text-lg text-gray-400 mb-10">
            タスクの追加・編集・完了状態の切り替えができる、タスク管理UIの自主制作です。
          </p>
          <div
            id="concept"
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-10 mb-12"
          >
            <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] items-center">
              <div>
                <p className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-4">
                  Concept LP
                </p>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                  今日やることを、
                  <br />
                  迷わず整理する。
                </h2>
                <p className="text-gray-400 leading-8 mb-8">
                  TaskFlowは、タスク・優先度・完了状態をひとつの画面で整理できる
                  <br />
                  タスク管理UIです。情報量を抑え、追加・編集・完了までの操作が
                  <br />
                  直感的に分かる設計を意識しました。
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#features"
                    className="rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:opacity-80 transition"
                  >
                    Get Started
                  </a>

                  <Link
                    href="/works/taskflow/demo"
                    className="
    inline-flex items-center gap-2
    rounded-full
    border border-[#d8b4fe]/30
    bg-[#d8b4fe]/10
    text-[#fbcfe8]
    px-5 py-3
    text-sm
    font-medium
    hover:bg-[#d8b4fe]/20
    hover:border-[#fbcfe8]/40
    transition
  "
                  >
                    View Demo →
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <div className="flex items-center justify-between mb-5">
                  <p className="font-semibold">Today</p>
                  <span className="text-xs text-gray-500">4 tasks</span>
                </div>

                <div className="space-y-3">
                  {[
                    { title: "LP構成を確認", priority: "High" },
                    { title: "UIパーツ作成", priority: "Medium" },
                    { title: "レスポンシブ調整", priority: "Low" },
                    { title: "応募書類を更新", priority: "Medium" },
                  ].map((task) => (
                    <div
                      key={task.title}
                      className="flex items-center justify-between rounded-xl bg-white/[0.06] border border-white/10 p-4"
                    >
                      <div>
                        <p className="text-sm text-white">{task.title}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          Priority : {task.priority}
                        </p>
                      </div>

                      <span className="h-3 w-3 rounded-full bg-white/70" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-4 mb-12">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-sm text-gray-500 mb-3 uppercase tracking-widest">
                Role
              </h2>
              <p className="leading-7 text-gray-200">
                デザイン / コーディング /<br /> レスポンシブ対応
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-sm text-gray-500 mb-3 uppercase tracking-widest">
                Tech
              </h2>
              <p className="leading-7 text-gray-200">
                Next.js / TypeScript /<br /> Tailwind CSS
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-sm text-gray-500 mb-3 uppercase tracking-widest">
                Type
              </h2>
              <p className="leading-7 text-gray-200">
                自主制作 / UI Design /<br /> Interactive Demo
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-sm text-gray-500 mb-3 uppercase tracking-widest">
                Target
              </h2>

              <p className="leading-7 text-gray-200">
                タスク管理に課題を<br />感じる個人・チーム
              </p>
            </div>
          </div>

          <section id="features" className="mb-10">
            <h2 className="text-xl md:text-3xl font-bold mb-6">Features</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "タスクを追加",
                  text: "入力欄から新しいタスクを追加でき、<br />Enter操作にも対応しています。",
                },
                {
                  title: "内容と優先度を編集",
                  text: "追加後のタスク名や優先度を<br />変更できるようにし、入力ミスにも<br />対応できるUIにしました。",
                },
                {
                  title: "完了状態を切り替え",
                  text: "Complete / Undoで状態を変更でき、<br />完了済みタスクは視覚的に<br />区別できるようにしています。",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition"
                >
                  <h3 className="font-bold mb-3">{feature.title}</h3>
                  <p
                    className="text-sm text-gray-400 leading-7"
                    dangerouslySetInnerHTML={{ __html: feature.text }}
                  />
                </div>
              ))}
            </div>
          </section>
          <section className="mb-10">
            <h2 className="text-xl md:text-3xl font-bold mb-4">制作背景</h2>
            <p className="text-sm md:text-base text-gray-300 leading-7 md:leading-8">
              タスク管理ツールでは、追加・編集・完了といった
              <br />
              基本操作が分かりやすいことが重要だと考えました。
              <br /><br />
              そのため、TaskFlowでは操作数を抑えながら、
              <br />
              タスクの状態や優先度がひと目で分かる構成を意識して制作しました。            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-3xl font-bold mb-4">工夫した点</h2>
            <p className="text-sm md:text-base text-gray-300 leading-7 md:leading-8">
              タスクの追加・編集・完了切り替えなど、
              操作ごとにUIの状態が分かりやすく変化するよう設計しました。

              <br />
              <br />

              また、レスポンシブ時にも崩れにくいよう、
              カードUIの余白やレイアウトを調整しています。
            </p>
          </section>


        </div>
      </main>
      <BackToTop />
    </>
  );
}