package linksubmit

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
)

func ZhanZhang() {
	// 创建一个HTTP客户端
	client := &http.Client{}

	// 创建POST请求的Body参数
	data := url.Values{}
	data.Set("seed", "https://www.h7ml.cn/sitemap.txt")
	body := bytes.NewBufferString(data.Encode())

	// 创建HTTP请求
	req, err := http.NewRequest("POST", "https://zhanzhang.so.com/?m=Sitemap&a=ping&host=www.h7ml.cn", body)
	if err != nil {
		panic(err)
	}

	// 设置请求头
	req.Header.Set("authority", "zhanzhang.so.com")
	req.Header.Set("accept", "application/json, text/plain, */*")
	req.Header.Set("accept-language", "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6")
	req.Header.Set("content-type", "application/x-www-form-urlencoded")
	req.Header.Set("cookie", "QiHooGUID=9D3BF16B0E1ED344F9FC311824263D98.1675361870030; __guid=137774715.1296707542965180200.1675361874544.088; Q=u%3D_5vu5%26n%3D5vu5%26le%3DBGV3AwR2ZwH5WGDjpKRhL29g%26m%3DZGZ1WGWOWGWOWGWOWGWOWGWOZmVj%26qid%3D2701573278%26im%3D1_t015fd9d240540cf287%26src%3Dpcw_so_zhanzhang%26t%3D1; __NS_Q=u%3D_5vu5%26n%3D5vu5%26le%3DBGV3AwR2ZwH5WGDjpKRhL29g%26m%3DZGZ1WGWOWGWOWGWOWGWOWGWOZmVj%26qid%3D2701573278%26im%3D1_t015fd9d240540cf287%26src%3Dpcw_so_zhanzhang%26t%3D1; biz_huid=11Nz9J7WzCQ8vNi7T%2FDS%2BYyrbVKqktdqI5Db8ShTGumzs%3D; so_huid=11Cfhw9DEZbBy2fWG2RWiK9g00ssViItxu8AkDVQ9NWss%3D; __huid=11Cfhw9DEZbBy2fWG2RWiK9g00ssViItxu8AkDVQ9NWss%3D; PHPSESSID=fmtpfc7kqtg7l0i7re2ilej5q4; Qs_lvt_100433=1675845824%2C1675960848%2C1676166564%2C1677074440%2C1679249205; test_cookie_enable=null; T=s%3D4a204d5c731ac310fdaf0e169b75582d%26t%3D1679249218%26lm%3D%26lf%3D2%26sk%3Dcc87cf462134b88db8a927f955f208a3%26mt%3D1679249218%26rc%3D%26v%3D2.0%26a%3D1; __NS_T=s%3D4a204d5c731ac310fdaf0e169b75582d%26t%3D1679249218%26lm%3D%26lf%3D2%26sk%3Dcc87cf462134b88db8a927f955f208a3%26mt%3D1679249218%26rc%3D%26v%3D2.0%26a%3D1; Qs_pv_100433=2095846082005442000%2C889758453408326400%2C824104470955713200%2C4547494251147566000%2C1070381503366200200")
	req.Header.Set("origin", "https://zhanzhang.so.com")
	req.Header.Set("referer", "https://zhanzhang.so.com/sitetool/sitemap?site=www.h7ml.cn")
	req.Header.Set("sec-ch-ua", "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Microsoft Edge\";v=\"110\"")
	req.Header.Set("sec-ch-ua-mobile", "?0")
	req.Header.Set("sec-ch-ua-platform", "\"Windows\"")
	req.Header.Set("sec-fetch-dest", "empty")
	req.Header.Set("sec-fetch-mode", "cors")
	req.Header.Set("sec-fetch-site", "same-origin")
	req.Header.Set("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.69")

	// 发送HTTP请求
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	// 读取响应内容
	bodyBytes, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}
	var bodyMap map[string]interface{}
	if err := json.Unmarshal(bodyBytes, &bodyMap); err != nil {
		panic(err)
	}

	fmt.Println(bodyMap["info"].(string))
}
