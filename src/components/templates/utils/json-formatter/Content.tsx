'use client';

import { useState, useCallback } from 'react';
import { toast } from 'sonner';
import { Copy, FileText, Minimize2, RotateCcw, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

interface ValidationResult {
  isValid: boolean;
  error?: string;
  line?: number;
  column?: number;
}

export const Content = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [validation, setValidation] = useState<ValidationResult>({ isValid: true });
  const [indentSize, setIndentSize] = useState<string>('2');

  const validateJSON = useCallback((jsonString: string): ValidationResult => {
    if (!jsonString.trim()) {
      return { isValid: true };
    }

    try {
      JSON.parse(jsonString);
      return { isValid: true };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';

      const lineMatch = errorMessage.match(/line (\d+)/);
      const columnMatch = errorMessage.match(/column (\d+)/);

      return {
        isValid: false,
        error: errorMessage,
        line: lineMatch ? parseInt(lineMatch[1]) : undefined,
        column: columnMatch ? parseInt(columnMatch[1]) : undefined,
      };
    }
  }, []);

  const formatJSON = useCallback((jsonString: string, indent: number): string => {
    try {
      const parsed = JSON.parse(jsonString);
      return JSON.stringify(parsed, null, indent);
    } catch {
      return jsonString;
    }
  }, []);

  const minifyJSON = useCallback((jsonString: string): string => {
    try {
      const parsed = JSON.parse(jsonString);
      return JSON.stringify(parsed);
    } catch {
      return jsonString;
    }
  }, []);

  const handleInputChange = useCallback(
    (value: string) => {
      setInput(value);
      const validationResult = validateJSON(value);
      setValidation(validationResult);

      if (validationResult.isValid && value.trim()) {
        const formatted = formatJSON(value, parseInt(indentSize));
        setOutput(formatted);
      } else {
        setOutput('');
      }
    },
    [validateJSON, formatJSON, indentSize]
  );

  const handleFormat = () => {
    if (validation.isValid && input.trim()) {
      const formatted = formatJSON(input, parseInt(indentSize));
      setOutput(formatted);
    }
  };

  const handleMinify = () => {
    if (validation.isValid && input.trim()) {
      const minified = minifyJSON(input);
      setOutput(minified);
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setValidation({ isValid: true });
  };

  const handleCopy = async () => {
    if (output) {
      try {
        await navigator.clipboard.writeText(output);
        toast.success('Copied to clipboard!');
      } catch (err) {
        console.error('복사 실패:', err);
        toast.error('Copy failed.');
      }
    }
  };

  // 예제 JSON 로드
  const loadExample = () => {
    const exampleJSON = {
      name: 'John Doe',
      age: 30,
      address: {
        street: '123 Main St',
        city: 'New York',
        zipcode: '10001',
      },
      hobbies: ['reading', 'swimming', 'coding'],
      isActive: true,
      balance: 1250.5,
    };

    const jsonString = JSON.stringify(exampleJSON);
    handleInputChange(jsonString);
  };

  return (
    <div>
      <Card className="dark:bg-stone-800 mb-6">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-2 items-center">
            <Button
              onClick={handleFormat}
              disabled={!validation.isValid || !input.trim()}
              variant="default"
              size="sm"
              className="gap-2"
            >
              <FileText className="h-4 w-4" />
              Format
            </Button>

            <Button
              onClick={handleMinify}
              disabled={!validation.isValid || !input.trim()}
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <Minimize2 className="h-4 w-4" />
              Minify
            </Button>

            <Button onClick={handleClear} variant="outline" size="sm" className="gap-2">
              <RotateCcw className="h-4 w-4" />
              Clear
            </Button>

            <Button onClick={loadExample} variant="outline" size="sm">
              Load Example
            </Button>

            <Separator orientation="vertical" className="h-6 mx-2" />

            <div className="flex items-center gap-2">
              <Label htmlFor="indent" className="text-sm whitespace-nowrap">
                Indent:
              </Label>
              <Select value={indentSize} onValueChange={setIndentSize}>
                <SelectTrigger className="w-28">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2 spaces</SelectItem>
                  <SelectItem value="4">4 spaces</SelectItem>
                  <SelectItem value="8">8 spaces</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 에러 메시지 */}
      {!validation.isValid && (
        <Alert className="mb-6 flex items-center" variant="destructive">
          <AlertDescription>
            <strong>Invalid JSON:</strong> {validation.error}
            {validation.line && (
              <span className="block text-sm mt-1">
                Line {validation.line}, Column {validation.column}
              </span>
            )}
          </AlertDescription>
        </Alert>
      )}

      {/* 입출력 영역 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* 입력 영역 */}
        <Card className="dark:bg-stone-800">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-lg">Input JSON</CardTitle>
                <CardDescription>Paste your JSON data here</CardDescription>
              </div>
              <Badge variant="secondary" className="font-mono text-xs">
                {input.length} chars
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Textarea
              value={input}
              onChange={e => handleInputChange(e.target.value)}
              placeholder="Paste your JSON here..."
              className={`min-h-[400px] font-mono text-sm resize-none dark:bg-stone-900 ${
                validation.isValid ? '' : 'border-destructive focus:border-destructive'
              }`}
            />
          </CardContent>
        </Card>

        {/* 출력 영역 */}
        <Card className="dark:bg-stone-800">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-lg">Formatted Output</CardTitle>
                <CardDescription>Formatted JSON will appear here</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="font-mono text-xs">
                  {output.length} chars
                </Badge>
                {output && (
                  <Button onClick={handleCopy} variant="outline" size="sm" className="gap-1">
                    <Copy className="h-3 w-3" />
                    Copy
                  </Button>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Textarea
              value={output}
              readOnly
              placeholder="Formatted JSON will appear here..."
              className="min-h-[400px] font-mono text-sm resize-none bg-muted/50 dark:bg-stone-900"
            />
          </CardContent>
        </Card>
      </div>

      {/* JSON 통계 */}
      {validation.isValid && input.trim() && (
        <Card className="dark:bg-stone-800">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              JSON Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">File Size</p>
                <p className="text-lg font-mono">{(new Blob([input]).size / 1024).toFixed(2)} KB</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Lines</p>
                <p className="text-lg font-mono">{input.split('\n').length}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Characters</p>
                <p className="text-lg font-mono">{input.length.toLocaleString()}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Status</p>
                <Badge variant={validation.isValid ? 'default' : 'destructive'} className="w-fit">
                  {validation.isValid ? 'Valid' : 'Invalid'}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
