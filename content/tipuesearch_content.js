var tipuesearch = {"pages": [{'title': 'About', 'text': '\n 學號與帳號:41023207/chiiip333 \n 網站倉儲:  https://github.com/chiiip333/cp2021_hw \n 網站連結:  https://chiiip333.github.io/cp2021_hw/content/index.html \n 其他與個人或作業相關資料說明或介紹: \n mdecourse 所屬的實驗室:  https://mde.tw \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'EXAM', 'text': '', 'tags': '', 'url': 'EXAM.html'}, {'title': 'W13', 'text': '\n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n random1 random2 \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'HW1', 'text': '紅色方塊(無按鈕) \n from browser import html\nfrom browser import document as doc\nimport browser.timer\n\ncanvas = html.CANVAS(width = 400, height = 100)\ncanvas.id = "game-board3"\n\nbrython_div = doc["brython_div3"]\nbrython_div <= canvas\nctx = canvas.getContext("2d")\n\npx = 0\npy = 40\nwidth = 20\nheight = 20\nspeed = 2\nctx.fillStyle = "red"\n\ndef game():\n    global px, py, width, height, speed\n    ctx.clearRect(px, py, width, height)\n    \n    px += speed\n    \n    if px < (px + 210) > canvas.width:\n        px = 200\n        \n    if px < (px + 210) > canvas.width:\n        py += speed\n    \n    if py < 0 or (py + height) > canvas.height:\n        speed = -speed\n    ctx.fillRect(px, py, width, height)\n    \nbrowser.timer.set_interval(game, 10) \n 紅色方塊(有按鈕) \n from browser import html\nfrom browser import document as doc\nimport browser.timer\n\ncanvas = html.CANVAS(width = 400, height = 100)\ncanvas.id = "game-board3"\nbrython_div = doc["brython_div"]\nbrython_div <= canvas\nctx = canvas.getContext("2d")\npx = 0\npy = 50\nwidth = 20\nheight = 20\nspeedx = 2\nspeedy = 2\n\ndef game():\n    global px, py, width, height, speedx, speedy\n    ctx.clearRect(px, py, width, height)\n    ctx.fillStyle = "red"\n    px += speedx\n    if px > 200 :\n        speedx = 0\n        py += speedy\n    if py < 0 or (py + height) > canvas.height:\n        speedy = -speedy\n    ctx.fillRect(px, py, width, height)\n    \nbrowser.timer.set_interval(game, 10) \n \n 英文打字 \n Every gist is a Git repository,which means that it can be forked and cloned. If you are signed in to GitHub when you create a gist, the gist will be associated with your account and you will see it in your list of gists when you navigate to your gist home page. Gists can be public or secret.Public gists show up in Discover, where people can browse new gists as they\'re created. They\'re also searchable, so you can use them if you\'d like other people to find and see your work. Secret gists don\'t shoe up in Discover and are not searchable.Secret gists aren\'t private. If you send the URL of a secret gist to a friend,they\'ll be able to see it. However,if someone you don\'t know discovers the URL,they\'ll also be able to see your gist. If you need to keep your code away from prying eyes, you may want to create a private repository instead. After creating a gist,you cannot convert it from public to secret. You\'ll receive a notification when: You are the autor of a gist. Someone mentions you in a gist. You subscribe to a gist,by clicking Subscribe at the top of any gist. You can pin gists to your profile so other people can see them easily. For more information,see "Pinning items to your profile." You can discover public gists others have created by going to the gist home page and clicking All Gists. This will take you to a page of all gists sorted and displayed by time of creation or update. You can also search gists by language with Gist Search. Gist sarch uses the same search syntax as code search. Since gists are Git repositories,you can view their full commit history,complete with diffs. You can also fork or clone gists.For more information,see "Forking and cloning gists". You can download a ZIP file of a gist by clicking the Download ZIP button at the top of the gist. You can embed a gist in any text field that supports Javascript,such as a blog post. To get the embed code,click the clipboard icon next to the Embed URL of a gist. To embed a specific gist file,append the Embed URL with ?file=FILENAME. Gist supports mapping GeoJSON files.These maps are displayed in embedded gists, so you can easily share and embed maps. For more information,see "Working with non-code files." \n \n 中文打字 \n Gist是Github的一個子服務，且任何人都可以使用這個服務，不論你是否擁有Github帳號。 以開發者的角度來說，最基本的功能就是可以分享片段的原始碼。 有別於Github的Repository，Gist可以只分享專案中的某一個小檔案中的程式碼， 且擁有私人的選項，讓別人不會搜尋到你的Gist。 在Github的Repository設定Private是要付費的，但在Gist是不需要的。 除此之外Gist還有許多用處，包括可以直接執行我們就來一一介紹吧! \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'run', 'text': '\n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n red \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  red 開始  \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'run.html'}, {'title': 'HW2', 'text': '', 'tags': '', 'url': 'HW2.html'}, {'title': 'run1', 'text': '第一種在網頁執行 Brython 程式的方法, 是使用者在網際程式編輯區輸入 Brython 程式碼, 必須手動按下 Run 才能執行. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n', 'tags': '', 'url': 'run1.html'}, {'title': 'run2', 'text': '第二種執行 Brython 程式的方法, 是將 Brython 程式存在 Gist, 利用 run.html?src=Gist_URL,  run.html  中的 Javascript 就會導入此 Gist 程式並自動執行. \n 按下導入 cango_gear1.py 且自動執行 \n 上述連結為: \n https://gist.githubusercontent.com/chiiip333/9ed4b5b3407b7c3cad00713f9b77f2f9/raw/df1a538e4ef2c07a9a81d4182d08b509e6b0817a/src \n run.html 後的變數為 ?src= https://gist.githubusercontent.com/mdecourse/e896a4705a95ac8cc4147b355b0e87ef/raw/8954b8280c524c5781dc3c0b3565bc489d3aa3a3/cango_gear1.py \n 其中的  e896a4705a95ac8cc4147b355b0e87ef  為 gist 檔案群組編號, 而隨後的  8954b8280c524c5781dc3c0b3565bc489d3aa3a3  則為 cango_gear1.py 的版次編號.', 'tags': '', 'url': 'run2.html'}, {'title': 'run3', 'text': '\n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': 'run3.html'}, {'title': 'W12', 'text': 'w12.txt \n ROC 國旗規格 . \n PROC 國旗規格  - 可以根據此規格定義, 新增  PROC flag  按鈕. \n USA 國旗規格  - 可以根據此規格定義, 新增  USA flag  按鈕. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n add 1 to 100 p261 ROC flag \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'HW3', 'text': '', 'tags': '', 'url': 'HW3.html'}, {'title': 'Algorithms', 'text': '', 'tags': '', 'url': 'Algorithms.html'}, {'title': 'Practice1', 'text': '這一頁將利用常用的 Python 程式語法解題: \n 初學者程式: \n 整數累加:  例如從 1 累加到 10, 最簡單且直覺的解法, 就是直接將 1 加到 10, 然後印出結果. \n 但是若題目需要累加到較大數值 (例如: 100), 程式編寫過程將會浪費許多時間, 若能善用變數設定, 變數加法, for 重複迴圈, range() 函式 ( 運作說明 ) 以及整數轉為字串的用法, 將程式改寫成:  1 add to 100 , 就可以省下許多時間. \n 初學者程式: \n 第二個範例為 字串內容查驗 : 利用輸入表單, 要求使用者輸入至少8個字元字串, 必須包含大小寫英文字母, 數字以及特殊符號,  查驗輸入字串  程式碼導入後, 可按下 Run 後執行. \n 進階程式:  LeetCode in Python  ( 來源 ) \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  判斷輸入字串是否aA1$, 且至少 8 個字元-開始  \n \n \n  判斷輸入字串是否aA1$, 且至少 8 個字元-結束 \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n', 'tags': '', 'url': 'Practice1.html'}, {'title': 'Practice2', 'text': '這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕. \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  editor1 結束  \n 查驗輸入字串程式: \n 查驗輸入字串 \n  判斷輸入字串是否aA1$, 且至少 8 個字元-開始  \n \n \n  判斷輸入字串是否aA1$, 且至少 8 個字元-結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n \n', 'tags': '', 'url': 'Practice2.html'}, {'title': 'Snake', 'text': '\n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n foolish bright \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n \n \n  ######################  editor1 結束 ###################### ', 'tags': '', 'url': 'Snake.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 30% \n Final Project 必須在 2022.01.05 22:00 之前完成 . \n Final Project 具體項目成果回報區 將於 2021.11.09 開啟, 於  2022.01.05 22:00 關閉 \n 利用 Brython 寫一個會 令人想玩 的網際遊戲. \n 參考章節: \n \n 專題摘要 \n 資料蒐集 \n 設計動機 \n 設計方法 \n 結果與討論 \n 附錄 \n \n 參考資料: \n https://github.com/collections/web-games \n https://github.com/topics/web-game \n https://github.com/topics/browser-game \n https://github.com/leereilly/games \n https://bmsleight.github.io/brython-blocks/ \n https://github.com/mdecourse/brython-blocks \n', 'tags': '', 'url': 'Final Project.html'}]};