#!/usr/bin/env bash
# Dev startup hook — dijalankan otomatis oleh sandbox saat container boot.
# (start.sh memanggil file ini bila ada, menggantikan flow bun install + db:push)
set -e
cd /home/z/my-project

# Install dependency bila belum ada
if [ ! -d node_modules ]; then
  bun install
fi

# Jalankan Next.js dev server di foreground (subshell boot menahan proses ini)
exec bun run dev
