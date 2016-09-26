//
//  MascotViewController.swift
//  Three Amigo2
//
//  Created by JakeOh on 2016-09-21.
//  Copyright © 2016 oh000024. All rights reserved.
//

import UIKit

class MascotViewController: UIViewController {

    @IBOutlet weak var MascotImage: UIImageView!
    @IBOutlet weak var mascotName: UILabel!
    
    var names:[String] = ["Android","Duke","Tux"]
    
    var images:[UIImage] = [
        UIImage(named: "android.png")!,
        UIImage(named: "duke.png")!,
        UIImage(named: "tux.png")!
    ]
    
    var index:Int = 0
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        MascotImage.image = images[index]
        mascotName.text = names[index]
    }

    @IBAction func handleNext(_ sender: AnyObject) {
        if(index>=images.count-1)
        {
            index = 0
        }
        else
        {
            index += 1
        }
        MascotImage.image = images[index]
        mascotName.text = names[index]
 
    }

    @IBAction func handlePrevious(_ sender: AnyObject) {
        if(index == 0){
            index = 2
        }
        else{
            index-=1;
        }
        MascotImage.image = images[index]
        mascotName.text = names[index]
    }

    
}
