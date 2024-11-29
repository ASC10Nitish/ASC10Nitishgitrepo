package collections;

import java.util.HashMap;
import java.util.TreeMap;

public class HashMapEx {
    public static void main(String[] args) {
//        HashMap<String,Integer> countryCodesMap=new HashMap<String ,Integer>();
//        countryCodesMap.put("America",1);
//        countryCodesMap.put("Singapore",65);
//        countryCodesMap.put("India",91);
//        countryCodesMap.put("Japan",81);
//        countryCodesMap.put("Japan".toUpperCase(),81);
//        countryCodesMap.put("Japan".toLowerCase(),81);
//        countryCodesMap.put("null",32);
//        countryCodesMap.put(null,234);
//        System.out.println(countryCodesMap);
//        System.out.println(countryCodesMap.isEmpty());
//        System.out.println(countryCodesMap.size());
//
//        if(countryCodesMap.containsKey("Singapore") && countryCodesMap.containsValue(65))
//        {System.out.println("present ");}
        TreeMap<String,Integer> countryCodesMap=new TreeMap<>();
        countryCodesMap.put("America",1);
        countryCodesMap.put("Singapore",65);
        countryCodesMap.put("India",91);
        countryCodesMap.put("Japan",81);
        countryCodesMap.put("Japan".toUpperCase(),81);
        countryCodesMap.put("Japaaaaaaannnnnnnnn",81);
        countryCodesMap.put("japan",81);
//        countryCodesMap.put("null",32);
//        countryCodesMap.put(null,234);
        System.out.println(countryCodesMap);
//        System.out.println(countryCodesMap.isEmpty());
//        System.out.println(countryCodesMap.size());
//
    }
}
