package linksubmit

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
)

func Baidu() {

	url := "http://data.zz.baidu.com/urls?site=https://www.h7ml.cn&token=unmWrGQ9puPdyCug"
	method := "POST"

	payload := strings.NewReader(`@urls.txt`)

	client := &http.Client{}
	req, err := http.NewRequest(method, url, payload)

	if err != nil {
		fmt.Println(err)
		return
	}
	req.Header.Add("Content-Type", "text/plain")

	res, err := client.Do(req)
	if err != nil {
		fmt.Println(err)
		return
	}
	defer res.Body.Close()

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(string(body))
}
