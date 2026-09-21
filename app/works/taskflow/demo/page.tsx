"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import BackToTop from "../../../../components/BackToTop";

type Priority = "High" | "Medium" | "Low";

type Task = {
    id: number;
    title: string;
    priority: Priority;
    completed: boolean;
};

const priorityStyle: Record<Priority, string> = {
    High: "border-[#E7C4C8] bg-[#FAECEE] text-[#A35C67]",
    Medium: "border-[#E8D6B7] bg-[#FFF6E6] text-[#9A7543]",
    Low: "border-[#C9DCCE] bg-[#EFF7F0] text-[#65836C]",
};

const initialTasks: Task[] = [
    { id: 1, title: "LP構成を確認", priority: "High", completed: false },
    { id: 2, title: "UIパーツ作成", priority: "Medium", completed: false },
    { id: 3, title: "レスポンシブ調整", priority: "Low", completed: false },
];

export default function DemoPage() {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    const [input, setInput] = useState("");
    const [priority, setPriority] = useState<Priority>("Medium");
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editingText, setEditingText] = useState("");
    const [editingPriority, setEditingPriority] =
        useState<Priority>("Medium");

    const addTask = () => {
        const title = input.trim();
        if (!title) return;

        setTasks((prev) => [
            ...prev,
            {
                id: Date.now(),
                title,
                priority,
                completed: false,
            },
        ]);

        setInput("");
    };

    const toggleTask = (id: number) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    const startEdit = (task: Task) => {
        setEditingId(task.id);
        setEditingText(task.title);
        setEditingPriority(task.priority);
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditingText("");
    };

    const saveEdit = (id: number) => {
        const title = editingText.trim();
        if (!title) return;

        setTasks((prev) =>
            prev.map((task) =>
                task.id === id
                    ? {
                        ...task,
                        title,
                        priority: editingPriority,
                    }
                    : task
            )
        );

        cancelEdit();
    };

    const completedCount = tasks.filter(
        (task) => task.completed
    ).length;

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-background px-6 text-foreground md:px-10">
                <div className="mx-auto max-w-5xl py-20">
                    <p className="font-editorial mb-5 text-sm tracking-[0.14em] text-muted">
                        INTERACTIVE DEMO
                    </p>

                    <Link
                        href="/works/taskflow"
                        className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#DED6D2] bg-[#F3ECE6] px-5 py-3 text-sm text-[#625B57] transition-colors hover:bg-[#E8DCD6] hover:text-[#965564]"
                    >
                        ← TaskFlow詳細に戻る
                    </Link>

                    <header className="mb-12 border-b border-border pb-10">
                        <p className="mb-4 text-xs tracking-[0.16em] text-muted">
                            UI DESIGN / PERSONAL PROJECT
                        </p>

                        <h1 className="font-heading-ja mb-5 text-3xl font-medium tracking-[0.08em] md:text-4xl">
                            TaskFlow Demo
                        </h1>

                        <p className="text-sm leading-8 text-[#625B57] md:text-base">
                            タスクの追加・編集・優先度の変更・完了状態の切り替えを
                            実際にお試しいただけます。
                        </p>
                    </header>

                    {/* 操作ガイド */}
                    <section className="mb-8 rounded-2xl border border-[#DCCBC4] bg-[#F3ECE6] p-6">
                        <p className="font-editorial mb-3 text-sm tracking-[0.12em] text-[#965564]">
                            HOW TO USE
                        </p>

                        <h2 className="mb-3 text-lg font-medium text-[#625B57]">
                            デモの使い方
                        </h2>

                        <p className="text-sm leading-8 text-[#625B57]">
                            ① タスクを入力して「追加」
                            <br />
                            ②「編集」で内容・優先度を変更
                            <br />
                            ③「完了」で状態を切り替え
                        </p>

                        <p className="mt-3 text-xs text-[#8B7770]">
                            ※ 操作内容は保存されず、再読み込みすると初期状態に戻ります。
                        </p>
                    </section>

                    {/* タスク管理UI */}
                    <section className="rounded-3xl border border-border bg-white/70 p-5 shadow-sm md:p-8">
                        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
                            <div>
                                <p className="font-editorial mb-2 text-sm tracking-[0.1em] text-[#B79D95]">
                                    MY TASKS
                                </p>

                                <h2 className="text-2xl font-medium text-[#625B57]">
                                    Today
                                </h2>
                            </div>

                            <p className="text-sm text-[#8B7770]">
                                {completedCount} / {tasks.length} 完了
                            </p>
                        </div>

                        {/* 追加フォーム */}
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                addTask();
                            }}
                            className="mb-8 grid gap-3 md:grid-cols-[1fr_auto_auto]"
                        >
                            <label className="sr-only" htmlFor="task-title">
                                タスク名
                            </label>

                            <input
                                id="task-title"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="新しいタスクを入力"
                                className="min-w-0 rounded-xl border border-[#DED6D2] bg-white px-5 py-3 text-sm text-[#625B57] outline-none transition placeholder:text-[#A99C97] focus:border-[#965564]"
                            />

                            <label className="sr-only" htmlFor="task-priority">
                                優先度
                            </label>

                            <select
                                id="task-priority"
                                value={priority}
                                onChange={(e) =>
                                    setPriority(e.target.value as Priority)
                                }
                                className="rounded-xl border border-[#DED6D2] bg-white px-4 py-3 text-sm text-[#625B57] outline-none focus:border-[#965564]"
                            >
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>

                            <button
                                type="submit"
                                disabled={!input.trim()}
                                className="rounded-xl bg-[#965564] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#7D4553] disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                ＋ 追加
                            </button>
                        </form>

                        {/* タスク一覧 */}
                        <div className="space-y-4">
                            {tasks.length === 0 && (
                                <p className="rounded-xl border border-dashed border-[#DED6D2] p-8 text-center text-sm text-[#8B7770]">
                                    タスクがありません。
                                </p>
                            )}

                            {tasks.map((task) => (
                                <div
                                    key={task.id}
                                    className={`rounded-2xl border p-5 transition md:p-6 ${task.completed
                                            ? "border-[#E9E2DE] bg-[#F7F4F2]"
                                            : "border-[#E5DCD7] bg-white"
                                        }`}
                                >
                                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                                        <div className="min-w-0 flex-1">
                                            {editingId === task.id ? (
                                                <div className="flex flex-col gap-3">
                                                    <label className="sr-only" htmlFor={`edit-${task.id}`}>
                                                        タスク名を編集
                                                    </label>

                                                    <input
                                                        id={`edit-${task.id}`}
                                                        value={editingText}
                                                        onChange={(e) =>
                                                            setEditingText(e.target.value)
                                                        }
                                                        onKeyDown={(e) => {
                                                            if (e.key === "Enter") {
                                                                saveEdit(task.id);
                                                            }
                                                            if (e.key === "Escape") {
                                                                cancelEdit();
                                                            }
                                                        }}
                                                        className="w-full rounded-lg border border-[#DED6D2] bg-white px-4 py-2 text-sm text-[#625B57] outline-none focus:border-[#965564]"
                                                    />

                                                    <label className="sr-only" htmlFor={`priority-${task.id}`}>
                                                        優先度を編集
                                                    </label>

                                                    <select
                                                        id={`priority-${task.id}`}
                                                        value={editingPriority}
                                                        onChange={(e) =>
                                                            setEditingPriority(
                                                                e.target.value as Priority
                                                            )
                                                        }
                                                        className="w-fit rounded-lg border border-[#DED6D2] bg-white px-4 py-2 text-sm text-[#625B57]"
                                                    >
                                                        <option value="High">High</option>
                                                        <option value="Medium">Medium</option>
                                                        <option value="Low">Low</option>
                                                    </select>
                                                </div>
                                            ) : (
                                                <>
                                                    <h3
                                                        className={`mb-3 break-words text-base font-medium md:text-lg ${task.completed
                                                                ? "text-[#A99C97] line-through"
                                                                : "text-[#625B57]"
                                                            }`}
                                                    >
                                                        {task.title}
                                                    </h3>

                                                    <span
                                                        className={`inline-flex rounded-full border px-3 py-1 text-xs ${priorityStyle[task.priority]}`}
                                                    >
                                                        {task.priority}
                                                    </span>

                                                    {task.completed && (
                                                        <span className="ml-2 text-xs text-[#8B7770]">
                                                            完了済み
                                                        </span>
                                                    )}
                                                </>
                                            )}
                                        </div>

                                        <div className="flex shrink-0 flex-wrap gap-2">
                                            {editingId === task.id ? (
                                                <>
                                                    <button
                                                        type="button"
                                                        onClick={() => saveEdit(task.id)}
                                                        disabled={!editingText.trim()}
                                                        className="rounded-full bg-[#965564] px-5 py-2 text-sm text-white transition hover:bg-[#7D4553] disabled:opacity-40"
                                                    >
                                                        保存
                                                    </button>

                                                    <button
                                                        type="button"
                                                        onClick={cancelEdit}
                                                        className="rounded-full border border-[#DED6D2] px-5 py-2 text-sm text-[#625B57] transition hover:bg-[#F3ECE6]"
                                                    >
                                                        キャンセル
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    <button
                                                        type="button"
                                                        onClick={() => startEdit(task)}
                                                        className="rounded-full border border-[#DED6D2] px-5 py-2 text-sm text-[#625B57] transition hover:bg-[#F3ECE6]"
                                                    >
                                                        編集
                                                    </button>

                                                    <button
                                                        type="button"
                                                        onClick={() => toggleTask(task.id)}
                                                        className="rounded-full border border-[#DCCBC4] bg-[#F3ECE6] px-5 py-2 text-sm text-[#965564] transition hover:bg-[#E8DCD6]"
                                                    >
                                                        {task.completed ? "元に戻す" : "完了"}
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="mt-12 text-center">
                        <Link
                            href="/works/taskflow"
                            className="inline-flex items-center gap-3 border-b border-[#B79D95] px-2 pb-3 text-sm text-[#625B57] transition hover:text-[#965564]"
                        >
                            ← TaskFlowの制作詳細に戻る
                        </Link>
                    </div>
                </div>
            </main>

            <BackToTop />
        </>
    );
}