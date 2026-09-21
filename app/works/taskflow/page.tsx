import Link from "next/link";
import Navbar from "../../../components/Navbar";
import BackToTop from "../../../components/BackToTop";

const information = [
  {
    label: "Role",
    value: "デザイン / コーディング /\nレスポンシブ対応",
  },
  {
    label: "Tech",
    value: "Next.js / TypeScript /\nTailwind CSS",
  },
  {
    label: "Type",
    value: "自主制作 / UI Design /\nInteractive Demo",
  },
  {
    label: "Target",
    value: "タスク管理に課題を感じる\n個人・チーム",
  },
];

const features = [
  {
    number: "01",
    title: "タスクを追加",
    text: "入力欄から新しいタスクを追加できます。\nEnterキーでの操作にも対応しています。",
  },
  {
    number: "02",
    title: "内容と優先度を編集",
    text: "追加したタスクの名前や優先度を変更でき、\n入力ミスや予定の変更にも対応できます。",
  },
  {
    number: "03",
    title: "完了状態を切り替え",
    text: "Complete / Undoで状態を切り替えられます。\n完了済みのタスクは表示を変えて区別しています。",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background px-6 text-foreground md:px-10">
        <div className="mx-auto max-w-7xl py-20">
          {/* ページ上部 */}
          <p className="font-editorial mb-5 text-sm tracking-[0.14em] text-muted">
            WORKS DETAIL
          </p>

          <Link
            href="/#works"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#DED6D2] bg-[#F3ECE6] px-5 py-3 text-sm text-[#625B57] transition-colors hover:bg-[#E8DCD6] hover:text-[#965564]"
          >
            ← Works一覧に戻る
          </Link>

          <header className="mb-16 border-b border-border pb-10">
            <p className="mb-4 text-xs tracking-[0.16em] text-muted">
              UI DESIGN / PERSONAL PROJECT
            </p>

            <h1 className="font-heading-ja mb-5 text-3xl font-medium tracking-[0.08em] md:text-4xl">
              TaskFlow
            </h1>

            <p className="text-sm leading-8 text-[#625B57] md:text-base">
              タスクの追加・編集・完了状態の切り替えができる、
              <br />
              タスク管理UIの自主制作です。
            </p>
          </header>

          {/* コンセプト */}
          <section className="mb-16 rounded-3xl border border-border bg-white/70 p-6 md:p-10">
            <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="font-editorial mb-4 text-sm tracking-[0.12em] text-[#B79D95]">
                  CONCEPT
                </p>

                <h2 className="mb-6 text-2xl font-medium leading-relaxed tracking-[0.05em] md:text-4xl">
                  今日やることを、
                  <br />
                  迷わず整理する。
                </h2>

                <p className="text-sm leading-8 text-[#625B57] md:text-base">
                  TaskFlowは、タスク・優先度・完了状態を
                  <br />
                  ひとつの画面で整理できるタスク管理UIです。
                  <br />
                  情報量を抑え、追加・編集・完了までの操作が
                  <br />
                  直感的に分かる設計を意識しました。
                </p>
              </div>

              {/* UIプレビュー */}
              <div className="rounded-2xl border border-[#E5DCD7] bg-[#FAF7F5] p-5 shadow-sm">
                <div className="mb-5 flex items-center justify-between">
                  <p className="font-medium text-[#625B57]">Today</p>
                  <span className="text-xs text-[#A18F89]">4 tasks</span>
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
                      className="flex items-center justify-between gap-3 rounded-xl border border-[#EAE1DC] bg-white p-4"
                    >
                      <div>
                        <p className="text-sm text-[#625B57]">
                          {task.title}
                        </p>
                        <p className="mt-1 text-xs text-[#A18F89]">
                          Priority : {task.priority}
                        </p>
                      </div>

                      <span className="h-3 w-3 shrink-0 rounded-full bg-[#B79D95]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* デモへの案内：目立つ位置に配置 */}
          <section className="mb-20 overflow-hidden rounded-3xl border border-[#DCCBC4] bg-[#F3ECE6] px-6 py-10 text-center md:px-12 md:py-14">
            <p className="font-editorial mb-4 text-sm tracking-[0.15em] text-[#965564]">
              INTERACTIVE DEMO
            </p>

            <h2 className="mb-5 text-2xl font-medium tracking-[0.06em] text-[#625B57] md:text-3xl">
              実際に操作してみる
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-sm leading-8 text-[#625B57] md:text-base">
              タスクの追加・編集・優先度の変更・完了状態の切り替えを
              <br />
              実際にお試しいただけます。
            </p>

            <Link
              href="/works/taskflow/demo"
              className="inline-flex items-center justify-center gap-4 rounded-full bg-[#965564] px-8 py-4 text-sm font-medium tracking-[0.08em] text-white transition hover:bg-[#7D4553]"
            >
              デモを体験する
              <span aria-hidden="true">→</span>
            </Link>

            <p className="mt-5 text-xs text-[#8B7770]">
              ※ デモ内の変更は保存されません。
            </p>
          </section>

          {/* 制作情報 */}
          <section className="mb-20">
            <div className="grid gap-5 md:grid-cols-6">
              {information.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border bg-white/70 p-6 md:col-span-2"
                >
                  <h2 className="font-editorial mb-4 text-xl tracking-[0.06em] text-[#B79D95] md:text-2xl">
                    {item.label}
                  </h2>

                  <p className="whitespace-pre-line text-sm leading-8 text-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mb-20">
            <div className="mb-10 text-center">
              <h2 className="font-editorial text-3xl tracking-[0.06em] text-[#B79D95] md:text-4xl">
                FEATURES
              </h2>
              <p className="mt-3 text-xs tracking-[0.15em] text-[#965564] md:text-sm">
                主な機能
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.number}
                  className="rounded-2xl border border-border bg-white/70 p-7"
                >
                  <p className="font-editorial mb-5 text-3xl text-[#B79D95]">
                    {feature.number}
                  </p>

                  <h3 className="mb-4 font-medium text-foreground">
                    {feature.title}
                  </h3>

                  <p className="whitespace-pre-line text-sm leading-8 text-[#625B57]">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/works/taskflow/demo"
                className="inline-flex items-center gap-3 border-b border-[#965564] px-2 pb-2 text-sm text-[#965564] transition hover:opacity-70"
              >
                これらの機能をデモで試す →
              </Link>
            </div>
          </section>

          {/* 制作背景・工夫した点 */}
          <div className="mx-auto mb-20 max-w-5xl space-y-8">
            <section className="rounded-3xl border border-border bg-white/70 p-6 md:p-10">
              <div className="mb-8 flex items-center gap-5 border-b border-border pb-6">
                <span className="font-editorial text-4xl text-[#B79D95] md:text-5xl">
                  01
                </span>

                <div>
                  <p className="font-editorial mb-1 text-sm tracking-[0.1em] text-[#B79D95]">
                    BACKGROUND
                  </p>
                  <h2 className="text-xl font-medium tracking-[0.08em] md:text-2xl">
                    制作背景
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-sm leading-8 text-[#625B57] md:text-base md:leading-9">
                <p>
                  タスク管理ツールでは、追加・編集・完了といった基本操作を
                  <br />
                  迷わず行えることが重要だと考え、タスク管理UIを自主制作しました。
                </p>

                <p>
                  タスク数が増えた場合でも、優先度や状態がひと目で把握できることを意識し、
                  <br />
                  シンプルで整理されたUIを目指しています。
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-border bg-white/70 p-6 md:p-10">
              <div className="mb-8 flex items-center gap-5 border-b border-border pb-6">
                <span className="font-editorial text-4xl text-[#B79D95] md:text-5xl">
                  02
                </span>

                <div>
                  <p className="font-editorial mb-1 text-sm tracking-[0.1em] text-[#B79D95]">
                    DESIGN & INTERACTION
                  </p>
                  <h2 className="text-xl font-medium tracking-[0.08em] md:text-2xl">
                    工夫した点
                  </h2>
                </div>
              </div>

              <div className="space-y-8">
                {[
                  {
                    number: "01",
                    title: "操作の分かりやすさ",
                    text: "タスクの追加・編集・完了切り替えをひとつの画面内で完結できるようにし、\n操作の流れが分かりやすいUIを意識しました。",
                  },
                  {
                    number: "02",
                    title: "編集しやすい設計",
                    text: "新規タスクの入力欄をシンプルにまとめ、\n追加後も内容や優先度を編集できるようにしました。",
                  },
                  {
                    number: "03",
                    title: "状態の視覚化",
                    text: "優先度や完了状態の表示を分け、情報量が増えても見やすさを保てるよう、\nカードUIの余白やレイアウトを調整しました。",
                  },
                  {
                    number: "04",
                    title: "レスポンシブ対応",
                    text: "スマートフォンでも操作しやすいよう、ボタンサイズや余白、\n画面幅に応じたレイアウトの切り替えを意識しました。",
                  },
                ].map((point, index) => (
                  <div key={point.number}>
                    {index > 0 && (
                      <div className="mb-8 border-t border-border" />
                    )}

                    <div className="grid gap-3 md:grid-cols-[180px_1fr] md:gap-8">
                      <div>
                        <p className="font-editorial mb-1 text-xs tracking-[0.1em] text-[#B79D95]">
                          POINT {point.number}
                        </p>
                        <h3 className="text-sm font-medium md:text-base">
                          {point.title}
                        </h3>
                      </div>

                      <p className="whitespace-pre-line text-sm leading-8 text-[#625B57] md:text-base">
                        {point.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <BackToTop />
    </>
  );
}