import { OpenAI, OpenAIEmbeddings } from '@langchain/openai';
import { PDFLoader } from 'langchain/document_loaders/fs/pdf';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';
import { RetrievalQAChain } from 'langchain/chains';

export const process_doc = async (filename: string | undefined, question: string) => {
    const model = new OpenAI({
        openAIApiKey: "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"
    });
    const loader = new PDFLoader(`./uploads/${filename}`, {
        splitPages: false
    })
    const doc = await loader.load()
    const vectorStore = await MemoryVectorStore.fromDocuments(doc, new OpenAIEmbeddings({
        openAIApiKey: "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"
    }))
    const vectorStoreRetriever = vectorStore.asRetriever()
    const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);
    return await chain.call({
        query: question,
    })
}
