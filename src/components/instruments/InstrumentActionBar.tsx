"use client";

import { Button } from "@/components/Button";

type InstrumentActionBarProps = {
  saveLabel: string;
  onSave?: () => void;
  saveDisabled?: boolean;
  retryHref: string;
  onRetry?: () => void;
  suggestHref: string;
  suggestName: string;
};

export function InstrumentActionBar({
  saveLabel,
  onSave,
  saveDisabled = false,
  retryHref,
  onRetry,
  suggestHref,
  suggestName,
}: InstrumentActionBarProps) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50">
      <div className="pointer-events-auto border-t border-border/80 bg-bg/95 shadow-[0_-12px_40px_-24px_rgba(42,40,38,0.12)] backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 sm:px-8 sm:py-4">
          {onSave && (
            <Button
              type="button"
              onClick={onSave}
              disabled={saveDisabled}
              className="min-h-11 w-full sm:w-auto sm:min-w-[10rem]"
            >
              {saveLabel}
            </Button>
          )}

          {onRetry ? (
            <Button
              type="button"
              variant="secondary"
              onClick={onRetry}
              className="min-h-11 w-full sm:w-auto"
            >
              Refazer teste
            </Button>
          ) : (
            <Button
              href={retryHref}
              variant="secondary"
              className="min-h-11 w-full sm:w-auto"
            >
              Refazer teste
            </Button>
          )}

          <Button
            href={suggestHref}
            variant="ghost"
            className="min-h-11 w-full justify-start sm:w-auto sm:flex-1 sm:justify-center"
          >
            Faça também o teste {suggestName}
          </Button>
        </div>
      </div>
    </div>
  );
}
