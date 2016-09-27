//
//  mascotViewController.swift
//  Three Amigo
//
//  Created by JakeOh on 2016-09-26.
//  Copyright © 2016 oh000024. All rights reserved.
//

import UIKit

class mascotViewController: UIViewController {

    @IBOutlet weak var mascotImage: UIImageView!
    @IBOutlet weak var mascotName: UILabel!
    
    var names: [String] = ["Androd","Duke","Tux"]
    //var images:[UIImage] = [UIImage(named:"android.png")!,UIImage(named:"duck.png")!,UIImage(named:"tux.png")!]
    
    var images: [UIImage] = [
        UIImage(named:"android.png")!,
        UIImage(named:"duke.png")!,
        UIImage(named:"tux.png")!
    ]
    var index:Int = 0
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        mascotName.text = names[index]
        mascotImage.image = images[index]
        
    }
    @IBAction func handlePrevious(_ sender: AnyObject) {
        
        if(index <= 0){
            index = names.count - 1
        }else{
            index -= 1
        }
        mascotName.text = names[index]
        mascotImage.image = images[index]
        
        
    }
    @IBAction func handleNext(_ sender: AnyObject) {

        if(index >= names.count - 1){
            index = 0
        }
        else{
            index += 1
        }
        mascotName.text = names[index]
        mascotImage.image = images[index]
    }
}
