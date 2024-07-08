/**
 * v0 by Vercel.
 * @see https://v0.dev/t/26lPIMOiKkd
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"
import { Button } from "@/components/landing/ui/button";
import { 
    CheckIcon, 
    CircleIcon, 
    EraserIcon, 
    EyeIcon, 
    FilterIcon, 
    ImageIcon, 
    PencilIcon, 
    RectangleVerticalIcon, 
    TrashIcon } from "@/components/landing/ui/icons"


export default function Component() {
  return (
    <div className="flex h-screen w-full">
      <div className="flex flex-col items-center justify-between border-r bg-gray-100 p-4 dark:border-gray-800 dark:bg-gray-950">
        <div className="grid gap-2">
          <Button size="icon" variant="ghost">
            <PencilIcon className="h-5 w-5" />
            <span className="sr-only">Pencil</span>
          </Button>
          <Button size="icon" variant="ghost">
            <EraserIcon className="h-5 w-5" />
            <span className="sr-only">Eraser</span>
          </Button>
          <Button size="icon" variant="ghost">
            <RectangleVerticalIcon className="h-5 w-5" />
            <span className="sr-only">Rectangle</span>
          </Button>
          <Button size="icon" variant="ghost">
            <CircleIcon className="h-5 w-5" />
            <span className="sr-only">Circle</span>
          </Button>
        </div>
        <div />
      </div>
      <div className="flex-1 bg-gray-50 dark:bg-gray-900">
        <span className="w-full h-full rounded-md bg-muted" />
      </div>
      <div className="flex flex-col items-start border-l bg-gray-100 p-4 dark:border-gray-800 dark:bg-gray-950">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Layers</h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between bg-white p-2 rounded-md dark:bg-gray-800">
                <div className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm font-medium">Layer 1</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="ghost">
                    <EyeIcon className="h-4 w-4" />
                    <span className="sr-only">Toggle visibility</span>
                  </Button>
                  <Button size="icon" variant="ghost">
                    <TrashIcon className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white p-2 rounded-md dark:bg-gray-800">
                <div className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm font-medium">Layer 2</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="ghost">
                    <EyeIcon className="h-4 w-4" />
                    <span className="sr-only">Toggle visibility</span>
                  </Button>
                  <Button size="icon" variant="ghost">
                    <TrashIcon className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Filters</h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between bg-white p-2 rounded-md dark:bg-gray-800">
                <div className="flex items-center gap-2">
                  <FilterIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm font-medium">Grayscale</span>
                </div>
                <Button size="icon" variant="ghost">
                  <CheckIcon className="h-4 w-4" />
                  <span className="sr-only">Apply filter</span>
                </Button>
              </div>
              <div className="flex items-center justify-between bg-white p-2 rounded-md dark:bg-gray-800">
                <div className="flex items-center gap-2">
                  <FilterIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm font-medium">Sepia</span>
                </div>
                <Button size="icon" variant="ghost">
                  <CheckIcon className="h-4 w-4" />
                  <span className="sr-only">Apply filter</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Export</h3>
            <div className="flex flex-col gap-2">
              <Button size="sm" variant="outline">
                Save as PNG
              </Button>
              <Button size="sm" variant="outline">
                Save as JPEG
              </Button>
              <Button size="sm" variant="outline">
                Save as SVG
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Layers</h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between bg-white p-2 rounded-md dark:bg-gray-800">
                <div className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm font-medium">Layer 3</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="ghost">
                    <EyeIcon className="h-4 w-4" />
                    <span className="sr-only">Toggle visibility</span>
                  </Button>
                  <Button size="icon" variant="ghost">
                    <TrashIcon className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white p-2 rounded-md dark:bg-gray-800">
                <div className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm font-medium">Layer 4</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="ghost">
                    <EyeIcon className="h-4 w-4" />
                    <span className="sr-only">Toggle visibility</span>
                  </Button>
                  <Button size="icon" variant="ghost">
                    <TrashIcon className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}