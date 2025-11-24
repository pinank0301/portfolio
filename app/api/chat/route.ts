import { GoogleGenerativeAI } from "@google/generative-ai";
import { getPortfolioContext } from "@/lib/portfolio-data";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { message } = await req.json();
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: "Gemini API key not configured" },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const systemPrompt = getPortfolioContext();
        const fullPrompt = `${systemPrompt}\n\nUser: ${message}\nAssistant:`;

        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ response: text });
    } catch (error) {
        console.error("Error in chat API:", error);
        return NextResponse.json(
            { error: "Failed to generate response" },
            { status: 500 }
        );
    }
}
