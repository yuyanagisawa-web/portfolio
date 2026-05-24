"use client";

import { useState } from "react";
import Link from "next/link";

type Task = {
    id: number;
    title: string;
    priority: string;
    completed: boolean;
};

export default function DemoPage() {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: "LP構成を確認", priority: "High", completed: false },
        { id: 2, title: "UIパーツ作成", priority: "Medium", completed: false },
        { id: 3, title: "レスポンシブ調整", priority: "Low", completed: false },
    ]);

    const [input, setInput] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editingText, setEditingText] = useState("");
    const [editingPriority, setEditingPriority] = useState("Medium");
    const addTask = () => {
        if (!input.trim()) return;

        setTasks([
            ...tasks,
            {
                id: Date.now(),
                title: input,
                priority,
                completed: false,
            },
        ]);

        setInput("");
    };

    const toggleTask = (id: number) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };
    const startEdit = (task: Task) => {
        setEditingId(task.id);
        setEditingText(task.title);
        setEditingPriority(task.priority);
    };
    const saveEdit = (id: number) => {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? {
                        ...task,
                        title: editingText,
                        priority: editingPriority,
                    }
                    : task
            )
        );

        setEditingId(null);
        setEditingText("");
    };
    return (
        <main className="min-h-screen bg-[#050505] text-white p-6 md:p-10">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/works/taskflow"
                    className="inline-block text-sm text-gray-400 hover:text-white transition mb-10"
                >
                    ← TaskFlow詳細に戻る
                </Link>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    TaskFlow Demo
                </h1>

                <p className="text-gray-400 mb-10">
                    タスクを追加し、完了状態を切り替えられる簡易デモです。
                </p>

                <div className="flex gap-3 mb-8">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") addTask();
                        }}
                        placeholder="タスクを入力"
                        className="w-full rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-white placeholder:text-gray-500 outline-none focus:border-white/40"
                    />
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none"
                    >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    <button
                        onClick={addTask}
                        className="shrink-0 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:opacity-80 transition"
                    >
                        Add
                    </button>
                </div>

                <div className="grid gap-4">
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            className={`rounded-2xl border p-6 flex items-center justify-between transition ${task.completed
                                ? "border-white/5 bg-white/[0.02] opacity-50"
                                : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
                                }`}
                        >
                            <div>
                                {editingId === task.id ? (
                                    <input
                                        value={editingText}
                                        onChange={(e) => setEditingText(e.target.value)}
                                        className="rounded-lg bg-black border border-white/10 px-3 py-2 text-white"
                                    />
                                ) : (
                                    <h2
                                        className={`text-xl font-semibold mb-2 ${task.completed
                                            ? "line-through text-gray-500"
                                            : "text-white"
                                            }`}
                                    >
                                        {task.title}
                                    </h2>
                                )}

                                {editingId === task.id ? (
                                    <select
                                        value={editingPriority}
                                        onChange={(e) => setEditingPriority(e.target.value)}
                                        className="mt-2 rounded-lg bg-black border border-white/10 px-3 py-2 text-sm text-white"
                                    >
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </select>
                                ) : (
                                    <p className="text-sm text-gray-400">
                                        Priority : {task.priority}
                                    </p>
                                )}
                            </div>

                            <div className="flex gap-2">

                                {editingId === task.id ? (
                                    <button
                                        onClick={() => saveEdit(task.id)}
                                        className="rounded-full bg-white text-black px-4 py-2 text-sm"
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => startEdit(task)}
                                        className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black transition"
                                    >
                                        Edit
                                    </button>
                                )}

                                <button
                                    onClick={() => toggleTask(task.id)}
                                    className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black transition"
                                >
                                    {task.completed ? "Undo" : "Complete"}
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}