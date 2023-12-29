'use client'

import React, { useState } from 'react'
import { Button } from './button'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import { Slider } from "@/components/ui/slider"
import ModeToggle from './ModeToggle'

import { CalendarDays } from "lucide-react"

const Dashboard = () => {
  return (
    <div className='m-auto p-2 space-y-8'>

        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Radio Group</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-96">A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.</p>

        <hr></hr>

        <Button variant="outline">Button</Button>

        <br></br>

        <Button className="">Login with Email</Button>

        <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="default" />
                <Label htmlFor="default">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="comfortable" />
                <Label htmlFor="comfortable">Comfortable</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="compact" />
                <Label htmlFor="compact">Compact</Label>
            </div>
        </RadioGroup>

        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">English</SelectItem>
                <SelectItem value="dark">中文 (Chinese)</SelectItem>
                <SelectItem value="system">日本語 (Japanese)</SelectItem>
            </SelectContent>
        </Select>

        <HoverCard>
            <HoverCardTrigger asChild>
                <Button>@nextjs</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                    <Avatar>
                        <AvatarImage src="/next.svg" />
                        <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@nextjs</h4>
                        <p className="text-sm">
                            The React Framework - created and maintained by @vercel.
                        </p>
                        <div className="flex items-center pt-2">
                            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                            <span className="text-xs text-muted-foreground">
                                Joined December 2021
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>

        <br></br>

        <Slider defaultValue={[33]} max={100} step={1} />

        <div className="grid w-full gap-1.5">
            <Label htmlFor="message-2">Your Message</Label>
            <Textarea placeholder="Type your message here." id="message-2" />
            <p className="text-sm text-muted-foreground">
                Your message will be copied to the support team.
            </p>
        </div>

        <ModeToggle />
    </div>
  )
}

export default Dashboard