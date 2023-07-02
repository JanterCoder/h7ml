package linksubmit

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
)

func Sm() {
	url := "https://data.zhanzhang.sm.cn/push?site=www.h7ml.cn&user_name=h7ml@qq.com&resource_name=mip_add&token=TI_0ae5b44754ac743f70cbd9f7482b11b5"
	method := "POST"
	payload := strings.NewReader(`@urls.txt`)

	req, err := http.NewRequest(method, url, payload)
	if err != nil {
		fmt.Println(err)
		return
	}

	res, err := http.DefaultClient.Do(req)
	if err != nil {
		fmt.Println(err)
		return
	}
	defer res.Body.Close()

	var bodyMap map[string]interface{}
	err = json.NewDecoder(res.Body).Decode(&bodyMap)
	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Println(bodyMap["returnCode"])
}
