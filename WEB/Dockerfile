# 使用 node:20.15.1-alpine 作為基礎映像
# 這是一個基於 Alpine Linux 的 Node.js 20.15.1 映像，具有較小的體積
FROM node:20.15.1-alpine

# 設置工作目錄為 /app
# 所有接下來的命令都將在這個目錄下執行
WORKDIR /app

# 複製當前目錄下的所有文件到容器的 /app 目錄
# 將當前構建上下文中的所有文件複製到容器中的工作目錄
COPY . /app

# 安裝項目依賴
# 執行 npm install 來安裝 package.json 中定義的所有依賴包
RUN npm install

# 構建項目
# 執行 npm run build 來構建項目，生成生產環境所需的文件
RUN npm run build

# 暴露容器的 3000 端口
# 告訴 Docker 容器將會使用 3000 端口，方便其他服務或端口映射
EXPOSE 3000

# 設置容器啟動時執行的命令
# 當容器啟動時，執行 ["npm", "start"] 命令來啟動應用程序
CMD ["npm", "start"]