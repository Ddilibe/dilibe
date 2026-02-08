#!/usr/bin/env bash

set -e

rename_jsx_deep_only() {
    local target_dir="${1:-.}"
    # Ignore node_modules, .git, etc.
    local ignored_folders='\( -name "node_modules" -o -name ".git" -o -name "dist" -o -name "build" \)'

    echo "🔍 Scanning subdirectories of '$target_dir' (skipping root files & $ignored_folders)..."

    # We add '! -path "./*.jsx"' to exclude files sitting directly in the root
    find "$target_dir" -type d $ignored_folders -prune \
         -o -type f -name "*.jsx" ! -path "./*.jsx" -print0 | while IFS= read -r -d '' file; do
        
        local new_file="${file%.jsx}.tsx"
        echo "Renaming: $file  ->  $new_file"
        mv "$file" "$new_file"
    done
    
    echo "✅ Done (Root files were untouched)."
}

rename_jsx_deep_only
