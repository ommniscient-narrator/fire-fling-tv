
import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const AlternatePersona = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    
    // Simulate API call for now
    setTimeout(() => {
      setResponse(`Based on your query "${query}", here are some recommendations that match that persona's viewing habits...`);
      setIsLoading(false);
    }, 2000);
  };

  const exampleQueries = [
    "Show me what horror fans in my demographic of my age are watching",
    "What would a sci-fi enthusiast in their 30s be binge-watching right now?",
    "Recommend shows for someone who loves true crime documentaries",
    "What are comedy lovers in urban areas currently streaming?"
  ];

  return (
    <div className="h-screen overflow-y-auto p-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Alternate Persona
          </h1>
          <p className="text-gray-300 text-lg">
            Discover what people with different viewing preferences are watching. 
            Ask about any demographic, age group, or interest to get personalized recommendations.
          </p>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="persona-query" className="block text-lg font-semibold mb-3">
                What would you like to know?
              </label>
              <Textarea
                id="persona-query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., Show me what horror fans in my demographic of my age are watching"
                className="min-h-[120px] bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 resize-none"
              />
            </div>
            
            <Button
              type="submit"
              disabled={isLoading || !query.trim()}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Get Recommendations
                </>
              )}
            </Button>
          </form>
        </div>

        {response && (
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Persona Insights</h2>
            <p className="text-gray-300 leading-relaxed">{response}</p>
          </div>
        )}

        <div className="bg-gray-800/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Example Queries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {exampleQueries.map((example, index) => (
              <button
                key={index}
                onClick={() => setQuery(example)}
                className="text-left p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-600/50 hover:border-orange-500/30"
              >
                <p className="text-gray-300">{example}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
