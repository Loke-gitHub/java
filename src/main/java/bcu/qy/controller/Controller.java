package bcu.qy.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bcu.qy.pojo.Album;



@RestController
public class Controller {
	@RequestMapping(value="/soft2group2albums")
	public List<Album> findAllAlbum(){
		List<Album> albums=new ArrayList<>();
		
		for (int i = 0; i < 60; i++) {
			Album a = new Album();
			a.setId(i);
			a.setName("soft2group2");
		
			albums.add(a);
		}
		
		
		
		return albums;
		
		
		
	}
}
